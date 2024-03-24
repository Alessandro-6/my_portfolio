import Carousel from "react-bootstrap/Carousel";

function Projects() {
  return (
    <section className="project py-5" id="project">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 text-center mx-auto col-12">
            <div className="col-lg-8 mx-auto">
              <h2 className="mb-5">Meu Portfólio</h2>
            </div>
            <Carousel>
              <Carousel.Item interval={10000}>
                <img
                  className="d-block w-100"
                  src="projects/image-1.jpg"
                  alt="url_shortening_api_site"
                />
                <Carousel.Caption>
                  <h5>
                    <a
                      className="fs-2 fw-bold text-white"
                      href="https://urlshorteningalexen267-design.netlify.app"
                    >
                      URL Shortening Api
                    </a>
                  </h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={10000}>
                <img
                  className="d-block w-100"
                  src="projects/image-2.jpg"
                  alt="easy_bank_landing_page"
                />
                <Carousel.Caption>
                  <h5>
                    <a
                      className="fs-2 fw-bold text-white"
                      href="https://easybank-alexen267design.netlify.app"
                    >
                      Easy Bank Landing Page
                    </a>
                  </h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={10000}>
                <img
                  className="d-block w-100"
                  src="projects/image-3.jpg"
                  alt="tip-calculator"
                />
                <Carousel.Caption>
                  <h5 className="text-dark">
                    <a
                      className="fs-2 fw-bold text-dark"
                      href="https://alexen267tipcalculator.netlify.app"
                    >
                      Tip Calculator
                    </a>
                  </h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={10000}>
                <img
                  className="d-block w-100"
                  src="projects/image-4.jpg"
                  alt="advice_generator"
                />
                <Carousel.Caption>
                  <h5>
                    <a
                      className="fs-2 fw-bold text-white"
                      href="https://advicegenerator267.netlify.app"
                    >
                      Advice Generator
                    </a>
                  </h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={10000}>
                <img
                  className="d-block w-100"
                  src="projects/image-5.png"
                  alt="imadet"
                />
                <Carousel.Caption>
                  <h5 className="text-dark">
                    <a
                      className="fs-2 fw-bold text-dark"
                      href="https://imadet.netlify.app"
                    >
                      IMADET
                    </a>
                  </h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
