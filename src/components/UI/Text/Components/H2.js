import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Styled = styled.h2`
  color: ${props => props.theme.colors.black};
  font-size: 42px;
  font-weight: bold;
  margin-top: 50px;
`;

const H2 = props => <Styled>{props.children}</Styled>;
H2.propTypes = {
  children: PropTypes.string,
  theme: PropTypes.any,
};

export default H2;
