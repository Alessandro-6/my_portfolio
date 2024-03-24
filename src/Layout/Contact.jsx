import Button from "../components/Button";

function Contact() {
  return (
    <section className="contact py-5" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mr-lg-12 col-12">
            <div className="google-map w-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4332.979738651994!2d13.183941613832344!3d-8.891173765149743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f4c3f70f2803%3A0x4204168de494eed3!2sAv.%2021%20de%20Janeiro%2C%20Luanda!5e1!3m2!1spt-PT!2sao!4v1711206148924!5m2!1spt-PT!2sao"
                width="400"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>

            <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
              <div className="contact-info-item">
                <h3 className="mb-3 text-white">Entre em contacto</h3>
                <p className="footer-text mb-0">+244 941 696 934</p>
                <p>
                  <a href="mailto:hello@company.co">propriedade0@gmail.com</a>
                </p>
              </div>
              <Button to="https://wa.link/cchnnq" type="light">
                Whatsapp
              </Button>
            </div>
          </div>
          {/* 
          <div className="col-lg-6 col-12">
            <div className="contact-form">
              <h2 className="mb-4">Localização e contacto</h2>

              <form action="" method="get">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your Name"
                      id="name"
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      id="email"
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      rows="6"
                      className="form-control"
                      id="message"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div className="ml-lg-auto col-lg-5 col-12">
                    
                  </div>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
