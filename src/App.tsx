import React from 'react';
import { personal } from './assets/static/personal';
import BackgroundParticles from './components/particles/BackgroundParticles';

function App() {
  return (
    <div className="main">
      <div className="resume">
        <div className="greetings">
          <p className="title title--large">Hi! I'm Arthur Werle.</p> 
          <p className="title title--large">I'm a Software Developer.</p>
        </div>
      </div>
      <div className="info">
        <div>
          <p className="title">About me</p> 
          <p className="paragraph">
            {personal.aboutMe}
          </p> 
        </div>
      </div>
      <BackgroundParticles />
    </div>
  );
}

export default App;
