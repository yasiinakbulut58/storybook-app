import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Heading, HeadingProps } from './';

const meta: Meta = {
  title: 'UI/Heading',
  component: Heading,
  argTypes: {
    as: {
      control: {
        type: 'select',
        labels: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6'
        }
      },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    }
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

const Template: Story<HeadingProps> = (
  args: JSX.IntrinsicAttributes & HeadingProps & { children?: React.ReactNode }
) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  as: 'h1',
  children: 'Heading'
};
