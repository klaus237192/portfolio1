import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { desktop, tablet } from '../../../Theme/media';

const Styled = styled.h1`
  margin-top: 150px;
  text-align: right;
  color: ${props => props.theme.colors.primary};
  font-size: 250px;
  @media (${desktop}) {
    font-size: 140px;
  }
  @media (${tablet}) {
    font-size: 100px;
    margin-bottom: 250px;
  }
`;

const H1 = props => <Styled>{props.children}</Styled>;
H1.propTypes = {
  children: PropTypes.string,
};
export default H1;
