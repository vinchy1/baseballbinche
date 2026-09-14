// Envoi des formulaires : Formspree si configuré, sinon ouverture d'un e-mail pré-rempli.
const labels: Record<string, string> = {
  prenom: 'Prénom',
  nom: 'Nom',
  annee_naissance: 'Année de naissance',
  categorie: 'Catégorie',
  email: 'E-mail',
  telephone: 'Téléphone',
  destinataire: 'Destinataire',
  objet: 'Objet',
  message: 'Message',
};

export function initForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-form]:not([data-ready])').forEach((form) => {
    form.dataset.ready = '1';
    const status = form.querySelector<HTMLElement>('[data-status]');
    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');

    const setStatus = (state: 'ok' | 'error' | 'pending', text: string) => {
      if (!status) return;
      status.dataset.state = state;
      status.textContent = text;
    };

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      if (data.get('_gotcha')) return;

      if (!form.action || form.getAttribute('action') === '') {
        const lines = [...data.entries()]
          .filter(([key]) => key in labels && String(data.get(key)).trim() !== '')
          .map(([key, value]) => `${labels[key]} : ${value}`);
        const subject = String(data.get('objet') || form.dataset.subject || 'Message depuis le site');
        const href = `mailto:${form.dataset.mailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
        window.location.href = href;
        setStatus('ok', 'Votre messagerie va s’ouvrir avec la demande pré-remplie. Il ne reste qu’à l’envoyer !');
        return;
      }

      button?.setAttribute('disabled', '');
      setStatus('pending', 'Envoi en cours…');
      try {
        const response = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
        if (!response.ok) throw new Error(String(response.status));
        form.reset();
        setStatus('ok', 'Merci ! Votre demande est bien arrivée, un membre du club vous recontacte très vite.');
      } catch {
        setStatus('error', `Oups, l’envoi a échoué. Écrivez-nous directement à ${form.dataset.mailto}.`);
      } finally {
        button?.removeAttribute('disabled');
      }
    });
  });
}
