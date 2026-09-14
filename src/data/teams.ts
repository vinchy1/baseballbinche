import type { ImageMetadata } from 'astro';
import peanuts from '../assets/images/team-peanuts.jpg';
import minimes from '../assets/images/team-minimes.jpg';
import cadets from '../assets/images/team-cadets.jpg';
import seniors from '../assets/images/team-seniors.jpg';
import baseball5 from '../assets/images/team-baseball5.jpg';
import slowpitch from '../assets/images/team-slowpitch.jpg';
import softball from '../assets/images/team-softball.jpg';

export type Team = {
  id: string;
  name: string;
  label: string;
  age: string;
  births: string;
  image: ImageMetadata;
  imageAlt: string;
  intro: string;
  points: string[];
  winter: string;
  summer: string;
  coach: string;
  price?: string;
};

// Contenu issu de baseballbinche.be (pages équipes, entraînements, inscriptions).
export const teams: Team[] = [
  {
    id: 'peanuts',
    name: 'Peanuts',
    label: "Psychomot' baseball",
    age: '5 – 7 ans',
    births: 'Nés en 2019 – 2021',
    image: peanuts,
    imageAlt: 'Jeune enfant avec un gant de baseball sur un terrain',
    intro:
      "La première rencontre avec la balle et la batte. Des jeux de psychomotricité pour apprendre à lancer, attraper, courir et frapper, en s'amusant.",
    points: ['Motricité, coordination et confiance en soi', "Jeux collectifs et découverte des règles", 'Tournois festifs comme le Family Day'],
    winter: "Dimanche 9h30 – 10h30 · Salle Saint-Albert, Péronnes",
    summer: 'Vendredi 18h00 – 19h00 · Rue du By 17, Épinois',
    coach: 'Patrick Nicolay',
    price: '140 €',
  },
  {
    id: 'minimes',
    name: 'Minimes',
    label: 'U12',
    age: '8 – 11 ans',
    births: 'Nés en 2015 – 2018',
    image: minimes,
    imageAlt: 'Jeune frappeur au marbre devant le receveur',
    intro:
      "L'âge où l'on devient joueur de baseball : positions sur le terrain, lancer, frappe et premiers matchs de championnat entre copains.",
    points: ['Apprentissage technique à chaque poste', 'Premiers matchs et tournois jeunes', 'Filles et garçons ensemble'],
    winter: 'Dimanche 16h00 – 18h00 · Salle Saint-Albert, Péronnes',
    summer: 'Lundi 18h00 – 20h00 + Pitch/Catch mercredi · Épinois',
    coach: 'Sébastien Murer & Grégory Cipolat',
    price: '140 €',
  },
  {
    id: 'cadets',
    name: 'Cadets',
    label: 'U15',
    age: '12 – 15 ans',
    births: 'Nés en 2011 – 2014',
    image: cadets,
    imageAlt: 'Jeune joueur en position de frappe',
    intro:
      'Le jeu se précise : stratégie, lancers plus rapides et championnat régulier. Une équipe soudée, en entente avec les Celtics Tournai et les Angels Namur.',
    points: ['Championnat cadets', 'Séances Pitch/Catch pour lanceurs et receveurs', "Encadrement par une équipe de coaches"],
    winter: 'Dimanche 9h30 – 11h30 · Salle Saint-Albert, Péronnes',
    summer: 'Vendredi 18h00 – 20h00 + Pitch/Catch mercredi · Épinois',
    coach: 'Martin Nicolay & Sébastien Previatello',
    price: '170 €',
  },
  {
    id: 'seniors',
    name: 'Seniors',
    label: 'Division 4',
    age: '16 ans et +',
    births: 'Nés en 2010 et avant',
    image: seniors,
    imageAlt: "Équipe de baseball réunie sur le terrain",
    intro:
      "Créée en 2018, l'équipe senior joue en championnat depuis 2019. Débutants motivés et joueurs confirmés y trouvent leur place.",
    points: ['Championnat de Division 4', 'Accessible aux débutants adultes', 'Matchs à domicile au SHAPE (Maisières)'],
    winter: "Dimanche 16h30 – 19h30 · Hall omnisports d'Erquelinnes",
    summer: 'Mercredi 18h30 – 20h30 · Rue du By 17, Épinois',
    coach: 'Rosario Angel Williams',
    price: '220 €',
  },
  {
    id: 'baseball5',
    name: 'Baseball 5',
    label: 'B5',
    age: 'Ados & adultes',
    births: 'Mixte',
    image: baseball5,
    imageAlt: 'Frappeur en action pendant un match',
    intro:
      "La version urbaine et ultra-rapide du baseball : 5 joueurs, une balle, pas de batte ni de gant. Le club organise même son propre tournoi international, la Guardians B5 Cup.",
    points: ['Mixte, rapide et spectaculaire', "Aucun matériel nécessaire", 'Tournois dont la Guardians B5 Cup'],
    winter: "Avec les adultes · Hall omnisports d'Erquelinnes",
    summer: 'Mercredi avec les adultes · Épinois',
    coach: 'David François',
  },
  {
    id: 'slowpitch',
    name: 'Slowpitch',
    label: 'Loisir mixte',
    age: 'Adultes',
    births: 'Mixte',
    image: slowpitch,
    imageAlt: 'Joueur frappant la balle sur un terrain',
    intro:
      "Le softball convivial : la balle est lancée en cloche, tout le monde frappe et l'ambiance prime. Idéal pour découvrir le sport à tout âge.",
    points: ['Mixte et convivial', 'Parfait pour les parents de nos jeunes', 'Compétition loisir'],
    winter: "Avec les adultes · Hall omnisports d'Erquelinnes",
    summer: 'Jeudi 18h00 – 20h00 · Rue du By 17, Épinois',
    coach: 'David François',
  },
  {
    id: 'softball',
    name: 'Softball',
    label: 'SLD3',
    age: 'Dames 16 ans et +',
    births: 'Nées en 2010 et avant',
    image: softball,
    imageAlt: 'Lanceuse de softball en plein mouvement',
    intro:
      "Notre équipe féminine engagée en championnat SLD3. Lancer à bras roulé, jeu rapide et esprit d'équipe au féminin.",
    points: ['Championnat SLD3', 'Débutantes bienvenues', 'Encadrement dédié'],
    winter: 'Dimanche 14h30 – 16h00 · Salle Saint-Albert, Péronnes',
    summer: 'Jeudi 18h00 – 20h00 · Rue du By 17, Épinois',
    coach: 'Sabrina Cordoba-Diaz',
    price: '220 €',
  },
];
