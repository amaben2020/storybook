import CustomButton from './../components/Button/CustomButton';

export default {
  title: 'Example/CustomButton',
  component: CustomButton,
  argTypes: {
    variant: { control: 'text' },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

// addons
const Template = (args) => (
  <CustomButton {...args}>
    This is a {args.variant} variant of the button
  </CustomButton>
);
export const Success = Template.bind({});
export const Danger = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});

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
