import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const ThemeContainer = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
ThemeContainer.propTypes = {
  children: PropTypes.node,
};

export default ThemeContainer;
