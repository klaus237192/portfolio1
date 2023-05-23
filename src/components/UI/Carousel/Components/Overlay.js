import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Shadow = styled.div`
  width: 90%;
  margin-left: 5%;
  height: 211px;
  bottom: 0;
  position: absolute;
  box-shadow: 0px 0px 31px 0px rgba(0, 0, 0, 0.57);
`;

const Background = styled.div`
  height: 100%;
  cursor: pointer;
  width: 100%;
  position: absolute;
  z-index: 1;
  background-color: #f4a0a0;
`;

const OverlayText = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;

const Underline = styled.div`
  border-bottom: 2px solid #fff;
  width: 50px;
  margin: auto;
`;

const Transition = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: 0.8s ease;
  :hover {
    opacity: 1;
  }
`;

const Overlay = ({ text }) => (
  <Transition>
    <Background>
      <OverlayText>
        {text}
        <Underline />
      </OverlayText>
    </Background>
    <Shadow />
  </Transition>
);
Overlay.propTypes = {
  text: PropTypes.string,
};

export default Overlay;
