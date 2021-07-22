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
            {personal.principles}
          </p> 
        </div>
        <div>
          <p className="title title--spaced">Work experiences 💻</p> 
          <div className="jobs">
            {personal.jobs.map(job => (
              <div>
                { job.current ? ( 
                    <p className="paragraph">
                      Current job
                    </p>
                  ) : (
                    <p className="paragraph">
                      from {job.from} to {job.to}
                    </p> 
                )}
                <p className="paragraph">
                  {job.title} at <a title={job.company} target="_blank" rel="noreferrer" href={job.website}>@{job.company}</a>
                </p> 
                <p className="paragraph">
                  {job.description}
                </p> 
              </div>
            ))}
          </div>
        </div>
      </div>
      <BackgroundParticles />
    </div>
  );
}

export default App;
