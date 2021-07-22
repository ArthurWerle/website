import React from 'react';
import { personal } from './assets/static/personal';
import BackgroundParticles from './components/particles/BackgroundParticles';

function App() {
  return (
    <div className="main">
      <div className="resume">
        <div className="greetings">
          <p className="title title--large">Hi!👋</p>  
          <p className="title title--large">I'm Arthur Werle.</p> 
          <p className="title title--large">I'm a Software Developer.</p>
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
          <span className="paragraph--emphasis"> Just tools </span>
          And every language is good to solve 
    specific problems. So I don't have any problem with working or learning another ones.
    I'm a visual person, so for now, I don't think about stop working with frontend, but I
    consider being a full-stack developer, because I want to learn al least one backend
    driven language, maybe Python. I'm also very curious about mobile development. I've done some
    personal projects with ReactNative, but I'm sure that a professional experience with it would be great.
    <span className="paragraph--emphasis"> I want to make life easier, happier and simpler to people. </span>
          </p> 
        </div>
        <div>
          <p className="title title--spaced">Work experience 💻</p> 
          <div className="jobs">
            <p className="paragraph">
              Working with Sofware Development since 2018.
              Currently developing software to  
              <a title="CWI Software" target="_blank" rel="noreferrer" href="http://www.cwi.com.br/">@CWI.</a>
              Also worked at 
              <a title="Kunden Systems" target="_blank" rel="noreferrer" href="http://www.kunden.com.br/">@Kunden.</a>

              <p>
                My sincerely thanks to this two companies which believed on me and gave me the chance to grow..
              </p>
              <p>
                I've worked with React, Typescript, Node.js, Sass, Gulp and many other frameworks and libraries.
              </p>
              <p>
                I've created SPAs and worked on 
                <a title="Arezzo" target="_blank" rel="noreferrer" href="http://www.arezzo.com.br/">@Arezzo</a>
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
