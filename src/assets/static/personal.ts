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
    I chose the IT area. I also like cooking, going out to eat, road trips & one piece 😁`,
  principles: 
    `I think as languages as they are. Just tools. And every language is good to solve 
    specific problems. So I don't have any problem with working or learning another ones.
    I'm a visual person, so I don't think about stop working with frontend, but I
    consider being a full-stack developer, because I want to learn at least one backend
    driven language, I'm interested in Python and Ruby On Rails. I've done some
    personal projects with ReactNative, and I think that a professional experience with it would be great.
    I want to make life easier, happier and simpler to people.`
};

export { personal };