import React from "react";
// src/Modal.js

const ModalArray = [
  {
    id: 1,
    poster: "http://canalplay-media.canal-plus.com/movies/5750/pictures/5750_pivot_large.jpg",
    title: "Le Labyrinthe de Pan",
    duration: 120,
    release: 2006,
    synopsis: 'Espagne, 1944. Fin de la guerre. Carmen, récemment remariée, s\'installe avec sa fille Ofélia chez son nouvel époux, le très autoritaire Vidal, capitaine de l\'armée franquiste. Alors que la jeune fille se fait difficilement à sa nouvelle vie, elle découvre près de la grande maison familiale un mystérieux labyrinthe. Pan, le gardien des lieux, une étrange créature magique et démoniaque, va lui révéler qu\'elle n\'est autre que la princesse disparue d\'un royaume enchanté.',
    director: "Guillermo Del Toro",
    trailer: "https://www.youtube.com/embed/GqHW3CyI7co?ecver=2",
    ratings: 7.3,
  },
  {
    id: 2,
    poster: "https://media.senscritique.com/media/000008266244/source_big/Moon.jpg",
    title: "Moon",
    duration: 120,
    release: 2009,
    synopsis: 'Quelques semaines avant la fin de son contrat dans la station lunaire de Sélène, un technicien se met à voir et à entendre des choses étranges. Convaincu que son isolement y est pour quelque chose, il se retrouve à enquêter et découvre que si ses patrons ont prévu de le remplacer, ils n\'ont jamais projeté de le ramener...',
    director: "Duncan Jones",
    trailer: "https://www.youtube.com/embed/twuScTcDP_Q?ecver=2",
    ratings: 8.8,
  },
  {
    id: 3,
    poster: "https://media.senscritique.com/media/000004848896/source_big/The_Big_Lebowski.jpg",
    title: "The Big Lebowski",
    duration: 120,
    release: "1998",
    synopsis: 'Jeff Lebowski, prénommé le Duc, est un paresseux qui passe son temps à boire avec son copain Walter et à jouer au bowling, jeu dont il est fanatique. Un jour deux malfrats le passent à tabac. Il semblerait qu\'un certain Jackie Treehorn veuille récupérer une somme d\'argent que lui doit la femme de Jeff. Seulement Lebowski n\'est pas marié. C\'est une méprise, le Lebowski recherché est un millionnaire de Pasadena. Le Duc part alors en quête d\'un dédommagement auprès de son richissime homonyme.',
    director: "Coen Brothers",
    trailer: "https://www.youtube.com/embed/cd-go0oBF4Y?ecver=2",
    ratings: 9.2,
  },
  {
    id: 4,
    poster: "http://fr.web.img5.acsta.net/r_1280_720/medias/04/34/49/043449_af.jpg",
    title: "Matrix",
    duration: 120,
    release: 1999,
    synopsis: 'Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est l\'un des pirates les plus recherchés du cyber-espace. A cheval entre deux mondes, Neo est assailli par d\'étranges songes et des messages cryptés provenant d\'un certain Morpheus. Celui-ci l\'exhorte à aller au-delà des apparences et à trouver la réponse à la question qui hante constamment ses pensées : qu\'est-ce que la Matrice ?',
    director: "Lana Wachowski, Lilly Wachowski",
    trailer: "https://www.youtube.com/embed/vKQi3bBA1y8?ecver=2",
    ratings: 8.9,
  },
  {
    id: 5,
    poster: "http://fr.web.img5.acsta.net/r_1280_720/medias/nmedia/18/64/88/83/19255620.jpg",
    title: "The Mask",
    duration: 120,
    release: 1994,
    synopsis: 'Stanley Ipkiss, modeste employé de banque, passionné par l\'univers de Tex Avery, trouve un masque ancien aux pouvoirs surnaturels. Il est néanmoins partagé entre devenir cette créature verte sûre d\'elle ou rester le timide Stanley Ipkiss, incapable d\'aborder la magnifique chanteuse de cabaret Tina Carlyle.',
    director: "Chuck Russel",
    trailer: "https://www.youtube.com/embed/hOqVRwGVUkA?ecver=2",
    ratings: 8.5,
  },
];

const ModalArray = () => (
  <div>
    {modals.map(modale => (
      <Modal trailer={modals.trailer} title={modals.title} synopsis={modals.synopsis}  director={modals.director} duration={modals.duration} release={modals.release} ratings={modals.ratings} poster={modals.poster}/>
    ))}
  </div>
);

export default ModalArray;