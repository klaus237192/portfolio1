import React from 'react';
import styled from 'styled-components';
import Menu from 'UI/Menu'; // eslint-disable-line
import data from '../data/api';
import BigHeader from './Header/BigHeader';
import Posts from './Posts';

const Container = styled.div`
  max-width: 1400px;
  width: 100%;
`;

const HomePage = () => (
  <Container className="container">
    <Menu />
    <BigHeader
      headerImgDesktop={data.headerImgDesktop}
      headerImgMobile={data.headerImgMobile}
      title={data.title}
      content={data.content}
    />
    <Posts posts={data.posts} postType={data.postType} />
  </Container>
);

export default HomePage;
