import React from 'react';
import { personal } from './assets/static/personal';
import BackgroundParticles from './components/particles/BackgroundParticles';
import instagramImg from './assets/images/instagram.svg';
import linkedinImg from './assets/images/linkedin.svg';
import githubImg from './assets/images/github.svg';
import emailImg from './assets/images/email.svg';
import whatsappImg from './assets/images/whatsapp.svg';

function App() {
  return (
    <div className="main">
      <div className="resume">
        <div className="greetings">
          <p className="title title--large">Hi!👋</p>  
          <p className="title title--large">I'm Arthur Werle.</p> 
          <p className="title title--large title--spaced">I'm a Software Developer.</p>
          <p className="title">Feel free to contact me.</p>
          <div className="social">
            <a target="_blank" rel="noreferrer" title="Instagram" href="https://www.instagram.com/werlearthur/">
              <img src={instagramImg} alt="Instagram"/>
            </a>
            <a target="_blank" rel="noreferrer" title="Linkedin" href="https://www.linkedin.com/in/arthur-werle-a8635a114/">
              <img src={linkedinImg} alt="Linkedin"/>
            </a>
            <a target="_blank" rel="noreferrer" title="Github" href="https://github.com/ArthurWerle">
              <img src={githubImg} alt="Github"/>
            </a>
            <a target="_blank" rel="noreferrer" title="Email" href="mailto:arthur.werle@gmail.com">
              <img src={emailImg} alt="Email"/>
            </a>
            <a target="_blank" rel="noreferrer" title="Whatsapp" href="https://wa.me/5551991873768?text=Hey there! I just got your number on your website.">
              <img src={whatsappImg} alt="Whatsapp"/>
            </a>
          </div>
        </div>
      </div>
      <div className="info">
        <div>
          <p className="title title--spaced">About me 🧑</p> 
          <p className="paragraph">
            {personal.aboutMe}
          </p> 
        </div>
        <div>
          <p className="title title--spaced">Principles 💭</p> 
          <p className="paragraph">
            I think as languages as they are.
            <span className="paragraph--emphasis"> Just tools. </span>
            So I don't have any problem with working or learning another ones.
            I'm a visual person, so for now, I don't think about stop working with frontend, but I
            consider being a full-stack developer.
            <span className="paragraph--emphasis"> I want to make life easier, happier and simpler to people. </span>
          </p> 
        </div>
        <div>
          <p className="title title--spaced">Work experience 💻</p> 
          <div className="jobs">
            <p className="paragraph">
              Working with Sofware Development since 2018.
              Currently developing software to  
              <a className="link" title="CWI Software" target="_blank" rel="noreferrer" href="http://www.cwi.com.br/">@CWI.</a>
              Also worked at 
              <a className="link" title="Kunden Systems" target="_blank" rel="noreferrer" href="http://www.kunden.com.br/">@Kunden.</a>

              <p>
                My sincerely thanks to this two companies which believed on me and gave me the chance to grow..
              </p>
              <p>
                I've worked with React, Typescript, Node.js, Sass, Gulp and many other frameworks and libraries.
              </p>
              <p>
                I've created SPAs and worked on 
                <a className="link" title="Arezzo" target="_blank" rel="noreferrer" href="http://www.arezzo.com.br/">@Arezzo</a>
                ecommerce websites which had more than 1 million monthly accesses.
              </p>
            </p>
          </div>
        </div>
      </div>
      <BackgroundParticles />
    </div>
  );
}

export default App;
