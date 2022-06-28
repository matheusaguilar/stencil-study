import readme from './readme.md';

export default {
  title: 'Components/MyComponent',
  // this is an example of how to add actions to the story
  parameters: {
    notes: readme,
    actions: {
      argTypesRegex: '^on.*',
      handles: ['click'] // you can add custom events to this array to trigger actions
    }
  },
};

const Template = (args) => `<my-component first="${args.first}" middle="${args.middle}" last="${args.last}"></my-component>`;

export const Exampless = Template.bind({});
Exampless.args = {
first: 'Winnie',
middle: 'The',
last: 'Pooh'
};

export const Example2 = Template.bind({});
Example2.args = {
first: 'Winnie',
middle: 'The',
last: ''
};

