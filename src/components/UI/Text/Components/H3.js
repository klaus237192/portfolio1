import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Styled = styled.h3`
  font-size: 18px;
  color: ${props => props.theme.colors[props.color]};
`;

const H3 = ({ children, color }) => (
  /**
 * H3 component renders a h3 element
 */
  <Styled color={color}>{children}</Styled>
);

H3.propTypes = {
  /**
   * the text that will be rendered
   */
  children: PropTypes.string,
  /**
   * Theme color for styling
   */
  color: PropTypes.string,
};

H3.defaultProps = {
  color: 'black',
};

export default H3;
