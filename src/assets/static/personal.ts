import moment from 'moment';

function getAge() {
  const birth = moment('07/06/1998');
  const today = moment();

  return today.diff(birth, 'years');
}

const personal = {
  aboutMe: 
    `I'm ${getAge()} years old and since I was a child, playing videogames was my favorite hobby. 
    Since I ever felt comfortable with computers and was the time for me to decide my job,
    I chose the IT area. I also like cooking and animes (specifically one piece).`,
  jobs: [
    {
      title: 'Front-end Developer',
      company: 'Kunden Systems',
      website: 'http://www.kunden.com.br/',
      description: '',
      from: '02/2018',
      to: '02/2020'
    },  
    {
      title: 'Front-end Developer',
      company: 'CWI Software',
      website: 'http://www.cwi.com.br/',
      description: '',
      from: '02/2020',
      to: ''
    },  
  ],
  principles: 
    `I think as languages as they are. Just tools. So I don't have any problem
    working with another ones.`,
  lookingForJobs: [
    'Front-end Developer',
    'Software Engineer',
  ]
};

export { personal };