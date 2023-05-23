const imgUrl = '/static/images';

export default {
  title: 'The XX',
  content:
    'The xx is een driekoppige Engelse indieband, gevormd in Wandsworth, Londen in 2005. De drie brachten hun debuutalbum, xx, uit in augustus 2009. Het kwam op de eerste plaats van de "best of 2009"-lijst van The Guardian en op de tweede op die van NME.',
  headerImgDesktop: '/static/images/header-image.jpg',
  headerImgMobile: '/static/images/header-image-mobile.jpg',
  postType: 'Upcoming Artists',
  posts: [
    {
      id: 1,
      img: `${imgUrl}/artist1.jpg`,
      name: 'Eefje de Visser',
      description: 'Zonder tegenwind kun je niet gaan vliegen',
    },
    {
      id: 2,
      img: `${imgUrl}/artist2.jpg`,
      name: 'Carlijn Odijkr',
      description: 'Is dit de belangrijkste eigenschap van een succesvol ondernemer?',
    },
    {
      id: 3,
      img: `${imgUrl}/artist3.jpg`,
      name: 'Marianne Schippers',
      description: 'Wie ben jij? David helpt je er op een verrassende manier achter komen!',
    },
    {
      id: 4,
      img: `${imgUrl}/artist4.jpg`,
      name: 'Daisy Amelsbeek',
      description: 'Zonder tegenwind kun je niet gaan vliegen',
    },
    {
      id: 5,
      img: `${imgUrl}/artist5.jpg`,
      name: 'Eefje de Visser',
      description: 'Is dit de belangrijkste eigenschap van een succesvol ondernemer?',
    },
  ],
};
