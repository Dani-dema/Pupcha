import {React, useState} from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption,TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col ,Modal , ModalHeader, ModalBody, Alert} from 'reactstrap';
import classnames from 'classnames';
import Player from './MusicComponents';


  function AccordionComponent ()  {
    

    const [activeTab, setActiveTab] = useState('1');
    const prova1 = useState(false)

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }



 
        return (
           <div>
                    <Nav tabs>
                        <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                        Bazuara në tekst
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                          Imazhe
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => { toggle('3'); }}
                        >
                          Audio
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '4' })}
                            onClick={() => { toggle('4'); }}
                        >
                          Probleme matematikore
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '5' })}
                            onClick={() => { toggle('5'); }}
                        >
                          Recaptcha
                        </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab} className="tabcontent">
                        <TabPane tabId="2">
                        <Row >
                        <Col sm="4">  <img  style={{marginLeft:"30px"}} src="assets/images/image-captcha.png" height="400" width="320" alt="Captcha" /> </Col> 
                            <Col sm="6">
                            <h4>Captcha bazuar ne imazhe</h4>
                            <p>CAPTCHA të bazuara në imazhe u zhvilluan për të zëvendësuar ato të bazuara në tekst. Këto CAPTCHA përdorin elemente grafikë të njohur, të tilla si foto të kafshëve, forma ose skena. Në mënyrë tipike, CAPTCHA-të e bazuara në imazhe u kërkojnë përdoruesve të zgjedhin imazhe që përputhen me një temë ose të identifikojnë imazhe që nuk përshtaten.ë pamjaftueshme të njohjes së tekstit, por gjithashtu mund të jetë e vështirë për njerëzit për t'u interpretuar.</p>
                            <p>CAPTCHA-të e bazuara në imazhe janë zakonisht më të lehta për t'u interpretuar nga njerëzit sesa bazuar në tekst. Sidoqoftë, këto mjete paraqesin çështje të dallueshme të hyrjes për përdoruesit e dëmtuar nga shikimi. Përsa i perket "bots", CAPTCHA-të e bazuara në imazhe janë më të vështira sesa teksti për t'u interpretuar sepse këto mjete kërkojnë njohjen e imazhit dhe klasifikimin semantik.</p>
                            </Col>
                           
                        </Row>
                        </TabPane>                 
                    <TabPane tabId="3">
                        <Row>
                          <Col sm="7">
                            <h4>Captcha bazuar ne audio</h4>
                            <p>Audio CAPTCHA-të u zhvilluan si një alternativë që u jep mundësi përdoruesve të dëmtuar nga shikimi. Këto CAPTCHA përdoren shpesh në kombinim me tekst ose CAPTCHA të bazuara në imazh. CAPTCHA-të audio paraqesin një regjistrim audio të një serie shkronjash ose numrash që fut një përdorues.
                                    <br />
                                  Këto CAPTCHA mbështeten në bot që nuk janë në gjendje të dallojnë karakteret përkatëse nga zhurma e sfondit. Ashtu si CAPTCHA-të e bazuara në tekst, këto mjete mund të jenë të vështira për t’u interpretuar nga njerëzit, si dhe për botët.</p>
                          </Col>
                          <Col sm="3">
                            <p style={{ fontSize: '16px', color: "black" }}>Shembuj captcha bazuar ne audio</p>
                            <Row>
                              <Col sm="3" style={{ marginLeft: "30px" }}>
                                <p>Alien</p> <Player url1={"https://captcha.com/sounds/alien.wav"} />
                                <br />
                              </Col>
                              <Col sm="3" style={{ marginLeft: "50px" }}>
                                <p>Industrial</p> <Player url2={"https://captcha.com/sounds/industrial.wav"} />
                                <br />
                              </Col>
                            </Row>
                            <Row>
                              <Col sm="3" style={{ marginLeft: "30px" }}>
                                <p>Radio</p><Player url3={"https://captcha.com/sounds/radio.wav"} />
                                <br />
                              </Col>
                              <Col sm="3" style={{ marginLeft: "50px" }}>
                                <p>Robot</p><Player url4={"https://captcha.com/sounds/robot.wav"} />
                                <br />
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </TabPane>
                        <TabPane tabId="1">
                        <Row >
                            <Col sm="6">
                            <h4>Captcha bazuar ne tekst</h4>
                            <p>CAPTCHA-të e bazuara në tekst janë mënyra origjinale në të cilën njerëzit janë verifikuar. Këto CAPTCHA mund të përdorin fjalë ose fraza të njohura, ose kombinime të rastësishme të shifrave dhe shkronjave. Disa CAPTCHA të bazuara në tekst gjithashtu përfshijnë ndryshime në shkronjat e mëdha.
                            CAPTCHA i paraqet këta personazhe në një mënyrë që tjetërsohet dhe kërkon interpretim. Tjetërsimi mund të përfshijë shkallëzimin, rrotullimin, shtrembërimin e karaktereve. Mund të përfshijë gjithashtu karaktere të mbivendosura me elemente grafikë si ngjyra, zhurma e sfondit, linjat, harqet ose pikat. Ky tjetërsim siguron mbrojtje ndaj botëve me algoritme të pamjaftueshme të njohjes së tekstit, por gjithashtu mund të jetë e vështirë për njerëzit për t'u interpretuar.</p>
                            </Col>
                            <Col sm="6">  <img  style={{borderRadius:"20px", marginTop:"10px"}} src="assets/images/text-captcha.png" height="300" width="500" alt="Ristorante Con Fusion" /> </Col> 
                        </Row>
                        </TabPane>
                        <TabPane tabId="4">
                          <Row>
                            <Col sm="7">
                              <h4>Captcha bazuar ne probleme matematikore</h4>
                              <p>Disa mekanizma CAPTCHA u kërkojnë përdoruesve të zgjidhin një problem të thjeshtë matematikor si "3 + 4" ose "18-3". Supozimi është që një "bot" do ta ketë të vështirë të identifikojë pyetjen dhe të sajojë një përgjigje. Një variant tjetër është një problem me fjalë, duke i kërkuar përdoruesit të shkruajë fjalinë që mungon në një fjali, ose të plotësojë një sekuencë të disa termave të lidhur. Këto lloje problemesh janë të arritshme për përdoruesit e dëmtuar në shikim, por në të njëjtën kohë ato mund të jenë më të lehta për t'u zgjidhur nga "bots" e këqij</p>
                            </Col>
                            <Col sm="3">  <img  style={{borderRadius:"10px", marginTop:"10px"}} src="assets/images/math-captcha.png" height="200" width="450" alt="Ristorante Con Fusion" /> </Col> 
                          </Row>
                        </TabPane>
                        <TabPane tabId="5">
                          <Row>
                          <Col sm="5">  <img  style={{borderRadius:"10px", marginTop:"10px"}} src="assets/images/recaptcha.png" height="180" width="400" alt="Ristorante Con Fusion" /> </Col> 
                            <Col sm="7">
                            <h4>Recaptcha</h4>
                            <p>Ky lloj CAPTCHA, i njohur për përdorimin e tij nga Google, është shumë më i lehtë për përdoruesit sesa shumica e llojeve të tjerë. Ai siguron një kuti kontrolluese duke thënë "Unë nuk jam një robot" të cilën përdoruesit duhet të zgjedhin - dhe kjo është e gjitha. Funksionon duke ndjekur lëvizjet e përdoruesve dhe duke identifikuar nëse klikimi dhe aktiviteti tjetër i përdoruesit në faqe i ngjan aktivitetit njerëzor ose një bot. Nëse testi dështon, reCAPTCHA ofron një zgjedhje tradicionale të imazhit CAPTCHA, por në shumicën e rasteve testi i kutisë së zgjedhjes mjafton për të vërtetuar përdoruesin.</p>
                            </Col>
                          </Row>
                        </TabPane>
                    </TabContent>
                    </div>
            
     )
   

}

export default AccordionComponent;