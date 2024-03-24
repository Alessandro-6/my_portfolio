import Button from "../components/Button";

function About() {
  return (
    <section
      className="about full-screen d-lg-flex justify-content-center align-items-center"
      id="about"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
            <div className="about-text">
              <small className="small-text">
                Bem-vindos ao{" "}
                <span className="mobile-block">meu portfólio!</span>
              </small>
              <h1 className="animated animated-text">
                <span className="mr-2">Olá, Eu sou</span>
                <div className="animated-info ms-3">
                  <span className="animated-item">Alessandro Almeida</span>
                  <span className="animated-item">Web Designer</span>
                  <span className="animated-item">Front End Developer</span>
                </div>
              </h1>

              <p>
                Construir um produto de sucesso é um desafio. Sou altamente
                proficiente em design de interfaces e desenvolvimento web.
              </p>

              <div className="custom-btn-group mt-4">
                <Button to="#contact">Entre em contacto</Button>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-12">
            <div className="about-image svg">
              <img
                src="undraw/undraw_programming_re_kg9v.svg"
                className="img-fluid"
                alt="svg image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
