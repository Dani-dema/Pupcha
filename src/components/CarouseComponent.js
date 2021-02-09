import {React, useState} from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption,TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col ,Modal , ModalHeader, ModalBody, Alert} from 'reactstrap';

const items = [
    {
      src: "assets/images/captcha01.png",
      
    },
    {
      src: 'assets/images/captcha02.png',
      
    },
    {
      src: 'assets/images/captcha03.png',
      
    }
  ];
  
  function CarouselComponent ()  {
    

    const [activeTab, setActiveTab] = useState('1');
    const prova1 = useState(false)

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
  
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
    const prova = ()=> {
      return alert("prova")
    }
 

const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="800" height="350" />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });


   
        return (
            
                <div className="carousel">
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                    </Carousel>
                 <hr/>
                </div>

     )
   

}

export default CarouselComponent;