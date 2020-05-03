import React, { useState } from 'react';
import { Link } from "gatsby"

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import image1 from '../image/educacao-infantil.jpg'
import image2 from '../image/livros-nacionais.jpg'
import image3 from '../image/dev.jpg'

const items = [
  {
    src: `${image1}`,
    caption: 'Educação Infantil'
  },
  {
    src: `${image2}`,
    caption: 'Top 10 Livros'
  },
  {
    src: `${image3}`,
    caption: 'Dev'
  }
];

const HeaderCarousel = (props) => {
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

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText}  style={{height: "300px", width:"100%"}} />
        <CarouselCaption className="d-inline" captionHeader={item.caption}/>
      </CarouselItem>
    );
  });

  return (
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
  );
  
}

export default HeaderCarousel;
