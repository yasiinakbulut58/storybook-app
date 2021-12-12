import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Text, TextProps } from './';

const meta: Meta = {
  title: 'UI/Text',
  component: Text,
  argTypes: {
    size: {
      control: {
        type: 'select',
        labels: {
          normal: 'normal',
          small: 'small',
          xsmall: 'xsmall'
        }
      },
      options: ['normal', 'small', 'xsmall']
    }
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

const Template: Story<TextProps> = (
  args: JSX.IntrinsicAttributes & TextProps & { children?: React.ReactNode }
) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'normal',
  children: 'Storybook text'
};
