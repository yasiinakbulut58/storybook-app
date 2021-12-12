import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '../Button';
import { ConfirmModal, ConfirmModalProps } from '.';

const meta: Meta = {
  title: 'UI/ConfirmModal',
  component: ConfirmModal,
  argTypes: {
    scrimMode: {
      control: {
        type: 'select',
        labels: {
          dark: 'dark',
          light: 'light'
        }
      },
      options: ['dark', 'light']
    }
  }
};

export default meta;

const Template: Story<ConfirmModalProps> = (
  args: JSX.IntrinsicAttributes & ConfirmModalProps & { children?: React.ReactNode }
) => (
  <ConfirmModal {...args}>
    <Button variant="text" color="error">
      Delete
    </Button>
  </ConfirmModal>
);

export const Default = Template.bind({});

Default.args = {
  scrimMode: 'dark',
  title: 'Unsaved changes',
  description: 'The changes you’ve made have not been saved. Would you like to save or discard the changes, or cancel and go back to editing?',
  submitButtonProps: {
    color: 'error',
    children: 'Delete',
  },
  onClick: () => { console.log('clicked')},
  onCancel: () => { console.log('canceled')}
};
