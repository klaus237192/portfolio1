import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { H3 } from 'UI/Text';
import Overlay from './Overlay';

const Container = styled.div`
  width: 295px;
  margin: 20px;
  hegiht: 100%;
`;

const HoverWrapper = styled.div`
  width: 295px;
  height: 422px;
  position: relative;
  transition: 0.8s ease;
  top: 0px;
  :hover {
    top: -20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const HoverItem = ({ img }) => (
  <HoverWrapper>
    <Image src={img} />
    <Overlay text="More info" />
  </HoverWrapper>
);
HoverItem.propTypes = {
  img: PropTypes.string.isRequired,
};

const CarouselItem = ({ name, img, description }) => (
  <Container>
    <HoverItem img={img} />
    <H3>{name}</H3>
    <p>{description}</p>
  </Container>
);

CarouselItem.propTypes = {
  /**
   * The name to display in the title
   */
  name: PropTypes.string.isRequired,
  /**
   * The url for the image
   */
  img: PropTypes.string.isRequired,
  /**
   * The description to display under the name
   */
  description: PropTypes.string.isRequired,
};

export default CarouselItem;
