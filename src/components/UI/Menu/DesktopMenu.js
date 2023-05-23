import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
`;

const MenuWrapper = styled.div`
  position: absolute;
  top: 35px;
  z-index: 10;
  @media (max-width: 575px) {
    display: none;
  }
`;

const DesktopMenu = () => (
  <MenuWrapper>
    <Container>
      <Link href="#">Events</Link>
      <Link href="#">Artists</Link>
      <Link href="#">Info</Link>
      <Link href="#">Contact</Link>
    </Container>
  </MenuWrapper>
);

export default DesktopMenu;
