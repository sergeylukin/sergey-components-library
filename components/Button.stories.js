import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme as defaultTheme } from '../utils';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Solid = Template.bind({});
Solid.args = {
  children: 'Button',
};

export const SolidWithProps = Template.bind({});
SolidWithProps.args = {
  children: 'Button',
  color: 'primary',
  size: 'large',
  disabled: false,
  enableElevation: false
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  variant: "outline",
  size: 'small',
  disabled: false,
  enableElevation: false,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Button',
};

const theme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    primary: {
      main: '#F34706',
      light: '#FF5964',
    },
  },
};
export const SolidWithTheme = Template.bind({});
SolidWithTheme.args = {
  children: 'Button',
  variant: 'solid',
  color: 'primary',
  size: 'medium',
  disabled: false,
  enableElevation: false,
};
SolidWithTheme.decorators = [(Story) => <ThemeProvider theme={theme}><Story/></ThemeProvider>];
