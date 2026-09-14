// Informations générales du club — liens externes, e-mails, réseaux.
export const site = {
  name: 'Guardians Binche',
  fullName: 'Baseball Club Binche Guardians ASBL',
  tagline: 'Baseball, softball & slowpitch à Binche depuis 2008',
  description:
    "Club de baseball, softball et slowpitch de Binche. Filles et garçons dès 4 ans, adultes de tous niveaux : 3 entraînements d'essai gratuits, matériel prêté.",
  founded: 2008,
  matricule: 108,
  members: '60+',
  emails: {
    inscription: 'inscription@baseballbinche.be',
  },
  president: { name: 'Antonin Cammers', phone: '0471 82 64 30' },
  bank: {
    iban: 'BE35 0688 9513 6437',
    holder: 'BASEBALL CLUB BINCHE GUARDIANS ASBL',
    reference: 'Nom Prénom - Cotisation',
  },
  kalisport: {
    base: 'https://baseballbinche.be',
    calendar: 'https://baseballbinche.be/calendrier',
    login: 'https://baseballbinche.be/connexion',
    registration: 'https://baseballbinche.be/inscriptions',
    documents: 'https://baseballbinche.be/documents',
    sponsoring: 'https://baseballbinche.be/sponsorin-team-building',
    press: 'https://baseballbinche.be/articles-de-presse',
  },
  files: {
    licence: 'https://baseballbinche.be/public/2373/upload/files/pre-inscriptions/formulaire-demande-de-licence-2026-vierge.pdf',
    sponsoring: 'https://baseballbinche.be/public/2373/upload/files/sponsorin-team-building/dossier-sponsoring-guardians-baseball-binche.pdf',
    teamBuilding: 'https://baseballbinche.be/public/2373/upload/files/sponsorin-team-building/projet-team-building_1.jpg',
    aut: 'http://www.lfbbs.be/wp-content/uploads/dopage-formulaire-aut-autorisation-usage-therapeutique.pdf',
  },
  rulesVideo: 'K2NdbWCttI0',
  b5CupAddress: 'Rue de Saint-Antoine 8, 7021 Mons',
  social: [
    { label: 'Facebook', icon: 'lucide:facebook', href: 'https://www.facebook.com/GuardiansBincheBaseball/' },
    { label: 'Instagram', icon: 'lucide:instagram', href: 'https://www.instagram.com/guardiansbaseballclub/' },
    { label: 'YouTube', icon: 'lucide:youtube', href: 'https://www.youtube.com/channel/UC6_o6ZxXuerY04reKXfqgUw' },
    { label: 'Flickr', icon: 'lucide:images', href: 'https://www.flickr.com/photos/baseballbinche/' },
  ],
  formspree: {
    trial: import.meta.env.PUBLIC_FORMSPREE_TRIAL as string | undefined,
    contact: import.meta.env.PUBLIC_FORMSPREE_CONTACT as string | undefined,
  },
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const nav: NavItem[] = [
  {
    label: 'Club',
    href: '/club',
    children: [
      { label: 'Notre histoire', href: '/club#histoire' },
      { label: 'Nos valeurs', href: '/club#valeurs' },
      { label: 'Organigramme', href: '/club#organigramme' },
      { label: 'Dans la presse', href: '/club#presse' },
    ],
  },
  {
    label: 'Équipes',
    href: '/equipes',
    children: [
      { label: 'Peanuts', href: '/equipes#peanuts' },
      { label: 'Minimes U12', href: '/equipes#minimes' },
      { label: 'Cadets U15', href: '/equipes#cadets' },
      { label: 'Seniors D4', href: '/equipes#seniors' },
      { label: 'Baseball 5', href: '/equipes#baseball5' },
      { label: 'Slowpitch', href: '/equipes#slowpitch' },
      { label: 'Softball', href: '/equipes#softball' },
    ],
  },
  {
    label: 'Rejoindre',
    href: '/rejoindre',
    children: [
      { label: 'Essai gratuit', href: '/rejoindre#essai' },
      { label: 'Inscription & tarifs', href: '/rejoindre#inscription' },
      { label: 'Entraînements', href: '/rejoindre#entrainements' },
      { label: 'Terrains', href: '/rejoindre#terrains' },
    ],
  },
  {
    label: 'Saison',
    href: '/saison',
    children: [
      { label: 'Le rythme de la saison', href: '/saison#rythme' },
      { label: 'The Guardians B5 Cup', href: '/saison#b5-cup' },
      { label: 'Calendrier complet', href: 'https://baseballbinche.be/calendrier' },
    ],
  },
  {
    label: 'Documents',
    href: '/documents',
    children: [
      { label: 'Le baseball en 5 minutes', href: '/documents#regles' },
      { label: 'Dopage', href: '/documents#dopage' },
      { label: 'Sponsoring & team building', href: '/documents#sponsoring' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];
