// Comité, staff et personnes de confiance (repris de baseballbinche.be/contact et /organigramme).

export type Person = { name: string; role: string; phone?: string };

export const committee: Person[] = [
  { name: 'Antonin Cammers', role: 'Président', phone: '0471 82 64 30' },
  { name: 'Sabrina Cordoba-Diaz', role: 'Secrétaire' },
  { name: 'Hugues Delvaux', role: 'Trésorier' },
  { name: 'Cédric Peetroons', role: 'Sponsoring', phone: '0496 74 29 42' },
  { name: 'David François', role: 'Directeur sportif', phone: '0496 74 94 11' },
  { name: 'Sébastien Previatello', role: 'Directeur sportif adjoint' },
  { name: 'Vincent Dervaux', role: 'Communication' },
  { name: 'Frédéric Leterme', role: 'Événements' },
  { name: 'Grégory Cipolat', role: 'Infrastructure & matériel' },
  { name: 'Gwenaelle Nesterenko', role: 'Cafétéria' },
  { name: 'Sébastien Murer', role: 'Administrateur · fondateur' },
];

export const coaches: Person[] = [
  { name: 'David François', role: 'Baseball 5 & Slowpitch', phone: '0496 74 94 11' },
  { name: 'Sébastien Murer', role: 'Minimes U12', phone: '0473 60 50 39' },
  { name: 'Grégory Cipolat', role: 'Assistant Minimes U12', phone: '0497 63 74 73' },
  { name: 'Sabrina Cordoba-Diaz', role: 'Softball', phone: '0478 93 59 22' },
  { name: 'Martin Nicolay', role: 'Cadets U15' },
  { name: 'Sébastien Previatello', role: 'Cadets U15' },
  { name: 'Patrick Nicolay', role: "Peanuts – Psychomot'" },
  { name: 'Rosario Angel Williams', role: 'Seniors / Adultes' },
];

export const trustedPersons = [
  'Caroline Baudoux',
  'Antonin Cammers',
  'Guillaume Culot',
  'Laetitia Giordano',
  'Sébastien Murer',
  'Céline Petrus',
];

// Destinataires proposés dans le formulaire de contact.
export const contactRecipients = [
  'Président',
  'Secrétaire',
  'Trésorier',
  'Communication',
  'Sponsoring',
  'Directeur sportif',
  'Directeur sportif adjoint',
  'Site internet',
];
