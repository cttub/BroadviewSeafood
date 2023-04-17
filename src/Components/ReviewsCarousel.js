import React, { Component } from 'react';
import Carousel, { Dots, slidesToShowPlugin, autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Review from './Reviews';

class ReviewsCarousel extends Component {
  state = {
    reviews: this.props.reviews,
  };

  render() {
    const { reviews } = this.state;

    const reviewElements = reviews.map((review, index) => (
      <Review key={index} name={review.name} review={review.review} company={review.company} />
    ));

    return (
      <div>
        <Carousel
          animationSpeed={1000}
          plugins={[
            'infinite',
            'arrows',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 1
              }
            },
            {
              resolve: autoplayPlugin,
              options: {
                interval: 3000,
              },
            },
          ]}
          arrowLeft={<div className="my-carousel-arrow">{'<'}</div>}
          arrowRight={<div className="my-carousel-arrow">{'>'}</div>}
        >
          {reviewElements}
        </Carousel>
      </div>
    );
  }
}

export default ReviewsCarousel;
