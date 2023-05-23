import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const A = styled.a`
  font-size: 37px;
  color: #000;
  font-weight: bold;
  width: 100%;
  display: block;
  cursor: pointer;
  text-align: right;
  margin-bottom: 16px;

  :hover {
    color: #000;
    text-decoration: none;
  }
  @media (min-width: 575px) {
    text-align: center;
    color: #fff;
    font-size: 18px;
    margin-bottom: auto;
    :hover {
      color: #fff;
      text-decoration: none;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  @media (min-width: 575px) {
    float: left;
    width: 80px;
  }
`;

const ActiveLine = styled.div`
  border-bottom: 2px solid #f4a0a0;
  opacity: 0;
  position: relative;
  top: -20px;
  width: 100%;
  @media (min-width: 575px) {
    width: 20px;
    margin: auto;
    position: static;
  }
  ${Wrapper}:hover & {
    opacity: 1;
  }
`;

const Link = ({ children, href }) => (
  <Wrapper>
    <A href={href}>{children}</A>
    <ActiveLine />
  </Wrapper>
);

Link.propTypes = {
  mobile: PropTypes.bool,
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Link;
