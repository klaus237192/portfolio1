import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { H1, P } from 'UI/Text'; // eslint-disable-line
import { tablet } from 'Theme/media';
import HeaderImg from './HeaderImg';

const Wrapper = styled.div`
  height: 600px;
  width: 100%;
  margin-bottom: 20px;
  left: 0px;
  right: 0px;
  position: relative;
  @media (${tablet}) {
    height: 650px;
  }
`;

/**
 * Big page header
 * @param {string} content   short introduction of the page
 * @param {string} headerImg url for the header img
 * @param {string} title     title of the page
 */

const BigHeader = ({ content, headerImgDesktop, headerImgMobile, title }) => (
  <Wrapper>
    <HeaderImg desktop={headerImgDesktop} mobile={headerImgMobile} />
    <Row>
      <Col md={10} mdOffset={1}>
        <H1>{title}</H1>
      </Col>
    </Row>
    <Row>
      <Col sm={3} smOffset={8}>
        <P>{content}</P>
      </Col>
    </Row>
  </Wrapper>
);

BigHeader.propTypes = {
  content: PropTypes.string.isRequired,
  headerImgDesktop: PropTypes.string.isRequired,
  headerImgMobile: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BigHeader;
