import CustomButton from './../components/Button/CustomButton';
import { actions, action } from '@storybook/addon-actions';

export default {
  title: 'Example/CustomButton',
  component: CustomButton,
  argTypes: {
    variant: { control: 'text' },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

// addons and knobs
const Template = (args) => (
  <CustomButton {...args}>{args.children || ' Button'}</CustomButton>
);
export const Success = Template.bind({});
export const Danger = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});

export const Log = () => (
  <CustomButton type='primary' {...actions('onClick', 'onMouseHover')}>
    This is a variant of the button
  </CustomButton>
);

Success.args = {
  className: '',
  variant: 'success',
};

Danger.args = {
  className: '',
  variant: 'danger',
};

Primary.args = {
  className: '',
  type: 'primary',
};
Secondary.args = {
  className: '',
  type: 'secondary',
};
