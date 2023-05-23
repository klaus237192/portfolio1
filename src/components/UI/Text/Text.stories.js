import React from 'react';
import { select } from '@storybook/addon-knobs';
import { H1, H2, H3, P } from './';

storiesOf('UI/Text', module)
  .add('H1', () => <H1>H1</H1>)
  .add('H2', () => <H2>This renders a styled H2</H2>)
  .add('H3', () => (
    <div>
      <H3>This renders a styled H3!</H3>
      <H3 color="primary">H3 with a different theme color</H3>
    </div>
  ))
  .add('P', () => <P>This renders a styled P</P>)
  .add('style-it', () => {
    const options = {
      black: 'black',
      green: 'green',
      primary: 'primary',
      purple: 'purple',
    };
    const defaultValue = 'black';
    return (
      <H3 color={select('colors', options, defaultValue)}>
        Style me with one of the theme colors!
      </H3>
    );
  });
