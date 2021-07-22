import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BackgroundParticles from './components/particles/BackgroundParticles';

function App() {
  const [age, setAge] = useState(0);

  function getAge() {
    const birth = new Date('07/06/1998');
    const today = new Date();

    const diff = new Date(Math.abs(today - birth));

    return Math.abs(diff.getUTCFullYear() - 1970);
  }

  useEffect(() => {
    setAge(getAge);
  }, []);

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
          <p className="paragraph">I'm {age} years old.</p> 
        </div>
      </div>
      <BackgroundParticles />
    </div>
  );
}

export default App;
