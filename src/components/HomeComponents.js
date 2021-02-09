import {Component, React, useState} from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption,TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col ,Modal , ModalHeader, ModalBody, Alert} from 'reactstrap';
import classnames from 'classnames';
import Puzzle from 'react-image-puzzle';
import History from './HistoryComponents'
import CarouselComponent from './CarouseComponent';
import AccordionComponent from './AccordionComponent';


class Home extends Component  {
  constructor(props){
    super(props);
        this.state = {
            isModalOpen: false
          };
          this.toggleModal = this.toggleModal.bind(this);
          this.doneCaptcha = this.doneCaptcha.bind(this);
}

toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  doneCaptcha(){
    setTimeout(() => { this.toggleModal()},5000)
    
    return alert("Pergezime ju ja dolet, tashi na vendosni piket e plota te projektit. Faleminderit")
   
  }

  render() {
    return(
            <div className="container">
            <div className="row align-items-start"></div>
        <div>
            <div className="row row-header">
                <div className="col-12"  style={{marginTop: "20px"}}>
                    <h1 className="titull"> Captcha </h1>
                    <p>Nëse përdorni Web, ju padyshim keni hasur në një shpikje të bezdisshme të quajtur CAPTCHA. Ato janë koleksione letrash të zbehta, të shtrira dhe të dërrmuara, me njolla ngjyrash, të cilat shpesh duhet të deshifrohen përpara se të dërgoni një email,të krijoni një account, të postoni një koment ose të blini një biletë.                 
                    Termi u krijua në 2003 nga Luis von Ahn, Manuel Blum, Nicholas J. Hopper dhe John Langford. Lloji më i zakonshëm i CAPTCHA (shfaqet si Version 1.0) u shpik për herë të parë në 1997 nga dy grupe që punonin paralelisht. Kjo formë e CAPTCHA kërkon që përdoruesitë vlerësojë saktë dhe të fusë një sekuencë shkronjash ose numrash të perceptueshëm në një imazh të deformuar të shfaqur në ekranin e tij.<br/>
                    Kjo procedurë e identifikimit të përdoruesit ka marrë shumë kritika, veçanërisht nga njerëzit me aftësi të kufizuara, por edhe nga njerëz të tjerë që mendojnë se puna e tyre e përditshme ngadalësohet nga fjalët e shtrembëruara që janë të vështira për t'u lexuar. Njeriut mesatar i duhen afërsisht 10 sekonda për të zgjidhur një CAPTCHA tipike.  <hr/></p>
                </div>
                <div className="carousel">
                <CarouselComponent/>
                 <hr/>
                </div>
            </div>
            
            <div className="row row-header">
                <div className="col-12">
                    <h3 className="titull"> Historiku i Captcha</h3>
                     <History/>
                </div>
            </div>
            <div className="row row-header">
                <div className="col-12">
                <div>
                  <hr/>
                <h3 className="titull"> LLojet e Captcha </h3>
                    <AccordionComponent/>
                    <hr/>
                    <div className="row row-header">
                        <div className="col-12">
                            <h3 className="titull"> Veshtiresit e captchas</h3>
                            <History/>
                        </div>
                    </div>
                    <>
                        <Button outline onClick={this.toggleModal}>
                         Shfaq captcha
                        </Button>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Pupcha</ModalHeader>
                        <ModalBody>
                        <Puzzle
                                            image='https://upload.wikimedia.org/wikipedia/en/6/68/John_Coltrane_-_Blue_Train.jpg'
                                            level={2}
                                            onDone={this.doneCaptcha}
                                        />
                          
                        </ModalBody>
                        </Modal>
                    </>
                      
                    </div>
                    <br/>
                    
                </div>
            </div>
        </div>  
      </div>
     )
   
}
}

export default Home;