import BackgroundParticles from "./components/particles/BackgroundParticles";
import SocialButtons from "./components/social-buttons";

function App() {
  return (
    <div className="main">
      <div className="resume">
        <div className="greetings">
          <p className="title title--large">Hi!👋</p>
          <p className="title title--large">I'm Arthur Werle.</p>
          <p className="title title--large title--spaced">
            I'm a Software Developer.
          </p>
          <p className="title">Feel free to contact me.</p>
          <p className="title">Even just to have a coffee ☕ or a beer 🍺.</p>
          <SocialButtons />
        </div>
      </div>
      <div className="info">
        <div>
          <div>
            <p className="title title--spaced">About me 🧑</p>
            <div className="jobs">
              <p className="paragraph">
                Currently developing software to
                <a
                  className="link"
                  title="Arezzo"
                  target="_blank"
                  rel="noreferrer"
                  href="http://www.arezzo.com.br/"
                >
                  @Arezzo
                </a>
                ecommerce websites, which have more than 1 million monthly
                accesses. I work as a third-party employee from
                <a
                  className="link"
                  title="CWI Software"
                  target="_blank"
                  rel="noreferrer"
                  href="http://www.cwi.com.br/"
                >
                  @CWI.
                </a>
                <p>
                  Also worked at
                  <a
                    className="link"
                    title="Kunden Systems"
                    target="_blank"
                    rel="noreferrer"
                    href="http://www.kunden.com.br/"
                  >
                    @Kunden
                  </a>
                  for 2 years.
                </p>
                <p>
                  My sincerely thanks to this two companies which believed on me
                  and gave me the chance to grow.
                </p>
                <p>
                  Working with Software Development since 2018, I've worked with
                  React, Typescript, Node.js, Styled Components, Sass, Gulp and
                  many other frameworks and libraries.
                </p>
              </p>
            </div>
            <a
              className="button"
              title="Curriculum"
              href="/arthur-resume.pdf"
              download
              target="_blank"
              rel="noreferrer"
            >
              <p>Download my curriculum</p>
            </a>
          </div>
        </div>
      </div>
      <BackgroundParticles />
    </div>
  );
}

export default App;
