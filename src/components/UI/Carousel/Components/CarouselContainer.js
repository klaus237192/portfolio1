import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import settings from './settings';
/**
 * CarouselContainer
 * @param {element} children CarouselItem
*/

const CarouselContainer = ({ children }) => <Slider {...settings}>{children}</Slider>;

CarouselContainer.propTypes = {
  /**
 * List of CarouselItems
 * @type {node}
 */
  children: PropTypes.node.isRequired,
};

export default CarouselContainer;
