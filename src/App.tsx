import React from 'react';
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
        <p className="title">Work experience.</p> 
        <p className="paragraph">A lot.</p> 
      </div>
      <BackgroundParticles />
    </div>
  );
}

export default App;
