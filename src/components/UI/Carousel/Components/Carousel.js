import React from 'react';
import PropTypes from 'prop-types';
import CarouselContainer from './CarouselContainer';
import CarouselItem from './CarouselItem';

const Carousel = ({ items }) => (
  <CarouselContainer>
    {items.map((item, i) => (
      <div key={i}>
        <CarouselItem {...item} />
      </div>
    ))}
  </CarouselContainer>
);

Carousel.propTypes = {
  /**
 * Array of items to display in the carousel
 */
  items: PropTypes.array.isRequired,
};

export default Carousel;
