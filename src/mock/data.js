import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Prakash Gupta',
  subtitle: "I'm  Master's Student ",
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'churn.png',
    title: ' Churn Problem',
    info: 'The problem of churn is a problem when a number of individuals move out of a collective group. It is one of the main problems that determine the steady-state level of customers in any type of business.',
    info2: '',
    url: '',
    repo: 'https://github.com/pgupta119/Churn-Problem', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'credit.png',
    title: 'Credit-Card-Fraud-detection',
    info: 'credit card companies are able to recognize fraudulent credit card transactions so that customers are not charged for items that they did not purchase. ',
    info2: '',
    url: '',
    repo: 'https://github.com/pgupta119/Credit-Card-Faurd-Detection-kaggle--dataset', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'recommend.jpeg',
    title: 'Recommender-System',
    info: '  The basic recommender-system for users to get movies recommendation',
    info2: '',
    url: '',
    repo: 'https://github.com/pgupta119/Recommender-System', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Euro.jpeg',
    title: 'EURO-2021 Prediction',
    info: ' This project is to predict the Euro Cup Winner of 2021 by using Machine learning techniques and Data sets.',
    info2: ' currently working',
    url: '',
    repo: 'https://github.com/pgupta119/Euro-Cup-Prediction', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '+31626549536',
  btn: '',
  email: "p.guptaprakash94@gmail.com",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      title:'linkedon',
      name: 'linkedin',
      url: 'https://linkedin.com/in/prakashgupta119',
    },
    {
      id: nanoid(),
      title:'github',
      name: 'github',
      url: 'https://github.com/pgupta119',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
