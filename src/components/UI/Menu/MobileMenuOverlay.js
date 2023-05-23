import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from './Link';

const Overlay = styled.div`
  background-color: #000000;
  opacity: 0.63;
  width: 100%;
  height: 100%;
`;

const MenuBackground = styled.div`
  width: 300px;
  background: #fff;
  height: 200%;
  transform: rotate(-7deg);
  position: absolute;
  top: -10%;
  right: -150px;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  @media (min-width: 575px) {
    display: none;
  }
`;

const MenuWrapper = styled.div`
  position: absolute;
  width::100%;
  right: 15px;
  top: 15px;
  & > a: {
    text-align:right;
  }
`;

const MobileMenuOverlay = ({ close }) => (
  <Wrapper>
    <Overlay onClick={close} />
    <MenuBackground />
    <MenuWrapper>
      <Link href="#">Events</Link>
      <Link href="#">Artists</Link>
      <Link href="#">Info</Link>
      <Link href="#">Contact</Link>
    </MenuWrapper>
  </Wrapper>
);

MobileMenuOverlay.propTypes = { close: PropTypes.func.isRequired };

export default MobileMenuOverlay;
