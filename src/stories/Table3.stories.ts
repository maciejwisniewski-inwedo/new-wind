import { Story, Meta } from '@storybook/angular';
import { Table3Component } from '../app/table3/table3.component';

export default {
  title: 'Example/Table3',
  component: Table3Component,
  argTypes: {
    // Add any input properties or events that you want to control from the Storybook UI here.
  },
} as Meta;

const Template: Story<Table3Component> = (args: Table3Component) => ({
  component: Table3Component,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  // Add default values for input properties here.
};
