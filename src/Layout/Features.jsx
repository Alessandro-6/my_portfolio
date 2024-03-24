import Tecnology from "../components/Tecnology";

function Features() {
  return (
    <section
      className="resume py-5 d-lg-flex justify-content-center align-items-center"
      id="tecnologies"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 d-grid gap-1 ">
            <h2 className="mb-4">Tecnologias</h2>
            <div className="tecnologies">
              <Tecnology
                tecnology="Reactjs"
                experience="Avançado"
                img="react"
              />

              <Tecnology tecnology="Redux" experience="Avançado" img="redux" />
              <Tecnology tecnology="Vuejs" experience="Médio" img="vuejs" />
              <Tecnology tecnology="Sass" experience="Avançado" img="sass" />
              <Tecnology tecnology="git" experience="Médio" img="git" />
              <Tecnology tecnology="gitHub" experience="Médio" img="github" />
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="tecnologies">
              <Tecnology tecnology="HTML5" experience="Avançado" img="html5" />
              <Tecnology tecnology="CSS3" experience="Avançado" img="css3" />
              <Tecnology
                tecnology="JavaScript(ES6)"
                experience="Avançado"
                img="javascript"
              />
              <Tecnology
                tecnology="TailwindCSS"
                experience="Médio"
                img="tailwindcss"
              />
              <Tecnology
                tecnology="Bootstrap"
                experience="Médio"
                img="bootstrap"
              />
              <Tecnology tecnology="Java" experience="Iniciante" img="java" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
