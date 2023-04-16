import React, { Component } from 'react';
import Carousel, { Dots, slidesToShowPlugin, autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


class CarouselComponent extends Component {
  state = {
    images: this.props.array
  };

  render() {
    const { images } = this.state;

    const imageElements = images.map((image, index) => (
      <img key={index} className="carousel-image" src={image} alt={`Image ${index}`} />
    ));

    return (
      <div>
        <Carousel
          animationSpeed={1000}
          plugins={[
            'infinite',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3
              }
            },
            {
              resolve: autoplayPlugin,
              options: {
                interval: 1000,
              },
            },
          ]}
        >
          {imageElements}
        </Carousel>
      </div>
    );
  }
}

export default CarouselComponent;
