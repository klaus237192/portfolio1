import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styled = styled.p`
  color: ${props => props.theme.colors[props.color]};
  font-size: 16px;
`;

const P = ({ children, color }) => <Styled color={color}>{children}</Styled>;

P.propTypes = {
  /**
   * the text that will be rendered
   */
  children: PropTypes.string,
  /**
   * Theme color for styling
   */
  color: PropTypes.string,
};

P.defaultProps = {
  color: 'black',
};

export default P;
