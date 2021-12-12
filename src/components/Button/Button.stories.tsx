import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './';

const meta: Meta = {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        labels: {
          text: 'text',
          withBackground: 'withBackground'
        }
      },
      options: ['text', 'withBackground']
    },
    color: {
      control: {
        type: 'select',
        labels: {
          primary: 'primary',
          success: 'success',
          dark: 'dark',
          error: 'error'
        }
      },
      options: ['primary', 'success', 'dark', 'error']
    },
    disabled: {
      control: 'boolean'
    }
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

const Template: Story<ButtonProps> = (
  args: JSX.IntrinsicAttributes & ButtonProps & { children?: React.ReactNode }
) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Delete',
};
