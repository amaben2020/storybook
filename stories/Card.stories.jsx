import Card from './../components/Todos/Card';

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    isCompleted: { control: 'select' },
  },
};

// addons and knobs
const Template = (args) => <Card {...args} />;
export const Default = Template.bind({});

Default.args = {
  title: 'My Card',
  isCompleted: true,
};
