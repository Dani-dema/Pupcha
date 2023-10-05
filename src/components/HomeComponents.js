import { Component, React } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Puzzle from "react-image-puzzle";
import History from "./HistoryComponents";
import CarouselComponent from "./CarouseComponent";
import AccordionComponent from "./AccordionComponent";
import DifficultComponent from "./DifficultComponents";
import AttackComponent from "./AttackComponent";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      fotot: [
        "assets/images/minion.jpeg",
        "assets/images/patriku.jpg",
        "assets/images/tweetyBird.jpg",
        "assets/images/Dora.png",
        "assets/images/JohnnyBravo.webp",
        "assets/images/Jerry-Mouse.jpg",
      ],
      open: false,
      prova: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.doneCaptcha = this.doneCaptcha.bind(this);
    this.toggleModal1 = this.toggleModal1.bind(this);
    this.toggleModal2 = this.toggleModal2.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      prova: true,
    });
  }
  toggleModal1() {
    this.setState({
      open: !this.state.open,
      prova: false,
    });
  }
  toggleModal2() {
    this.setState({
      prova: !this.state.prova,
    });
  }

  doneCaptcha() {
    setTimeout(() => {
      this.toggleModal();
    }, 1000);
    setTimeout(() => {
      this.toggleModal1();
    }, 1000);
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  render() {
    return (
      <div className="container">
        <div className="row align-items-start"></div>
        <div>
          <div className="row row-header">
            <div className="col-12" style={{ marginTop: "20px" }}>
              <h1 className="titull"> Captcha </h1>
              <p>
                Nëse përdorni Web, ju padyshim keni hasur në një shpikje të
                bezdisshme të quajtur CAPTCHA. Ato janë koleksione letrash të
                zbehta, të shtrira dhe të dërrmuara, me njolla ngjyrash, të
                cilat shpesh duhet të deshifrohen përpara se të dërgoni një
                email,të krijoni një account, të postoni një koment ose të blini
                një biletë. Termi u krijua në 2003 nga Luis von Ahn, Manuel
                Blum, Nicholas J. Hopper dhe John Langford. Lloji më i zakonshëm
                i CAPTCHA (shfaqet si Version 1.0) u shpik për herë të parë në
                1997 nga dy grupe që punonin paralelisht. Kjo formë e CAPTCHA
                kërkon që përdoruesit të vlerësojnë saktë dhe të fusin një
                sekuencë shkronjash ose numrash të perceptueshëm në një imazh të
                deformuar të shfaqur në ekranin e tyre.
                <br />
                Kjo procedurë e identifikimit të përdoruesit ka marrë shumë
                kritika, veçanërisht nga njerëzit me aftësi të kufizuara, por
                edhe nga njerëz të tjerë që mendojnë se puna e tyre e përditshme
                ngadalësohet nga fjalët e shtrembëruara që janë të vështira për
                t'u lexuar. Njeriut mesatar i duhen afërsisht 10 sekonda për të
                zgjidhur një CAPTCHA tipike. <hr />
              </p>
            </div>
            <div className="carousel" style={{ marginLeft: "-20px" }}>
              <CarouselComponent />
            </div>
            <div className="foto">
              <img
                style={{ margin: "auto" }}
                src="assets/images/captcha03.png"
                height="200"
                width="300"
                alt="captcha"
              />
            </div>
          </div>

          <div className="row row-header">
            <div className="col-12">
              <h3 className="titull"> Historiku i Captcha</h3>
              <History />
            </div>
          </div>

          <div className="row row-header">
            <div className="col-12">
              <div>
                <hr />
                <h3 className="titull"> LLojet e Captcha </h3>
                <AccordionComponent />
                <hr />
                <div className="row row-header">
                  <div className="col-12">
                    <h3 className="titull"> Veshtiresit e Captchas</h3>
                    <DifficultComponent />
                  </div>
                </div>

                <div className="row row-header">
                  <div className="col-12">
                    <h3 className="titull"> Sulmet e Captchas</h3>
                    <AttackComponent />
                  </div>
                </div>

                <Button outline onClick={this.toggleModal}>
                  Shfaq captcha
                </Button>

                <Modal isOpen={this.state.isModalOpen}>
                  <ModalHeader toggle={this.toggleModal}>PUPCHA </ModalHeader>
                  <ModalBody>
                    <p>Per te vazhduar me tej zgjidheni PUPCHA!</p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}>
                      <Puzzle
                        style={{ width: "100%", margin: "auto" }}
                        image={this.state.fotot[this.getRndInteger(0, 5)]}
                        level={2}
                        onDone={this.doneCaptcha}
                      />
                    </div>
                  </ModalBody>
                </Modal>

                <Modal isOpen={this.state.open} toggle={this.toggleModal1}>
                  <ModalHeader toggle={this.toggleModal1}>
                    {" "}
                    Pergezime!{" "}
                  </ModalHeader>
                  <ModalBody>
                    <img
                      src="assets/images/sukses.jpg"
                      height="100%"
                      width="100%"
                      alt="Captcha"
                    />
                  </ModalBody>
                </Modal>

                {!this.state.isModalOpen && this.state.prova && (
                  <Modal isOpen={this.state.prova} toggle={this.toggleModal2}>
                    <ModalHeader toggle={this.toggleModal2}>
                      {" "}
                      Provo perseri!{" "}
                    </ModalHeader>
                    <ModalBody>
                      <img
                        src="assets/images/deshtim.jpeg"
                        height="100%"
                        width="100%"
                        alt="Captcha"
                      />
                    </ModalBody>
                  </Modal>
                )}
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
