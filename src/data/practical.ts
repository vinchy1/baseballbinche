// Horaires, tarifs et terrains — à mettre à jour à chaque saison.

export const season = 2026;

export const pricing = [
  { category: "Peanuts – Psychomot'", births: '2019 – 2021', price: 140 },
  { category: 'Minimes – U12', births: '2015 – 2018', price: 140 },
  { category: 'Cadets – U15', births: '2011 – 2014', price: 170 },
  { category: 'Seniors', births: '2010 et avant', price: 220 },
  { category: 'Softball', births: '2010 et avant', price: 220 },
];

export const winterSchedule = {
  title: "Saison d'hiver",
  period: '16 novembre — fin mars',
  intro: 'Préparation physique et technique en salle.',
  sessions: [
    { team: "Peanuts – Psychomot'", day: 'Dimanche', time: '09h30 – 10h30', meet: '09h15', place: 'Salle Saint-Albert, Péronnes' },
    { team: 'Cadets – U15', day: 'Dimanche', time: '09h30 – 11h30', meet: '09h15', place: 'Salle Saint-Albert, Péronnes' },
    { team: 'Softball', day: 'Dimanche', time: '14h30 – 16h00', meet: '14h15', place: 'Salle Saint-Albert, Péronnes' },
    { team: 'Minimes – U12', day: 'Dimanche', time: '16h00 – 18h00', meet: '15h45', place: 'Salle Saint-Albert, Péronnes' },
    { team: 'Adultes', day: 'Dimanche', time: '16h30 – 19h30', meet: '16h15', place: "Hall omnisports d'Erquelinnes" },
  ],
};

export const summerSchedule = {
  title: "Saison d'été",
  period: 'fin mars — fin septembre',
  intro: 'Retour sur le terrain, en extérieur, Rue du By 17 à Épinois.',
  days: [
    { day: 'Lundi', sessions: [{ team: 'Minimes – U12', time: '18h00 – 20h00' }] },
    {
      day: 'Mercredi',
      sessions: [
        { team: 'Pitch / Catch U15 – U12', time: '18h00 – 20h30' },
        { team: 'Adultes', time: '18h30 – 20h30' },
      ],
    },
    {
      day: 'Jeudi',
      sessions: [
        { team: 'Softball', time: '18h00 – 20h00' },
        { team: 'Slowpitch', time: '18h00 – 20h00' },
      ],
    },
    {
      day: 'Vendredi',
      sessions: [
        { team: "Peanuts – Psychomot'", time: '18h00 – 19h00' },
        { team: 'Cadets – U15', time: '18h00 – 20h00' },
      ],
    },
  ],
};

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const venues = [
  {
    name: 'Terrain d’entraînement',
    usage: 'Entraînements d’été · toutes les équipes',
    address: 'Rue du By 17',
    city: '7134 Épinois',
    map: maps('Rue du By 17, 7134 Epinois, Belgique'),
  },
  {
    name: 'Salle Saint-Albert',
    usage: 'Hiver · Peanuts, Minimes, Cadets, Softball',
    address: '266 Chaussée de Brunehault',
    city: '7134 Péronnes-lez-Binche',
    map: maps('266 Chaussée de Brunehault, 7134 Péronnes-lez-Binche, Belgique'),
  },
  {
    name: 'Hall omnisports',
    usage: 'Hiver · Adultes',
    address: 'Rue Libotte-Mozin 1',
    city: '6560 Erquelinnes',
    map: maps('Rue Libotte-Mozin 1, 6560 Erquelinnes, Belgique'),
  },
  {
    name: 'Terrain de match',
    usage: 'Matchs à domicile',
    address: 'SHAPE – Rue Grande',
    city: '7020 Maisières (Mons)',
    map: maps('SHAPE Rue Grande, 7020 Maisières, Belgique'),
  },
];

export const registrationSteps = [
  {
    title: 'Formulaire en ligne',
    text: 'Complétez vos informations de base via le formulaire de pré-inscription sécurisé du club.',
  },
  {
    title: 'Documents par e-mail',
    text: "Envoyez la demande de licence (certificat médical inclus) et, pour les nouveaux membres, une photo d'identité (.jpg, max 100 Ko).",
  },
  {
    title: 'Paiement de la cotisation',
    text: 'Virement sur le compte du club avec la communication « Nom Prénom - Cotisation ».',
  },
  {
    title: 'Espace membre',
    text: 'Créez votre compte de connexion sur le site du club pour suivre calendrier et convocations.',
  },
];
