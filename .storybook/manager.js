import 'storybook-addon-jsx/register';
import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
  theme,
});
