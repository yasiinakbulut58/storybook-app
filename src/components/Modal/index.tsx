import React, { FC, ReactNode, useState } from 'react';
import { Button, ButtonProps } from '../Button';
import { Heading } from '../Heading';
import { Text } from '../Text';

import { StyledConfirmModal, Footer, Header, ConfirmModalBody, Container } from './styles';

export interface ConfirmModalProps extends React.HTMLAttributes<HTMLDivElement> {
  scrimMode?: string;
  title?: string;
  description?: string;
  hasCancel?: boolean;
  submitButtonProps?: ButtonProps;
  onClick?: () => void;
  onCancel?: () => void;
  children: ReactNode;
}

const ConfirmModalUI = ({
  scrimMode,
  title,
  description,
  hasCancel = true,
  submitButtonProps = { color: 'error', children: 'Delete'},
  onClick,
  onCancel,
  children,
  ...props
}: ConfirmModalProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    if (onClick) onClick();
    setIsOpen(false);
  };

  const cancelHandler = () => {
    if (onCancel) onCancel();
    setIsOpen(false);
  };

  return (
    <>
      <span className="tooltip-text-wrapper" onClick={() => setIsOpen(true)}>
        {children}
      </span>
      {isOpen && (
        <StyledConfirmModal scrimMode={scrimMode} {...props}>
          <div className="overlay" onClick={cancelHandler} role="button" tabIndex={-1} />
          <Container>
            <Header>
              <Heading as="h3">{title}</Heading>
            </Header>
            <ConfirmModalBody>
              <Text size="normal">{description}</Text>
            </ConfirmModalBody>
            <Footer>
              {hasCancel && (
                <Button color="dark" variant="text" onClick={cancelHandler}>
                  Cancel
                </Button>
              )}
              <Button onClick={clickHandler} {...submitButtonProps} />
            </Footer>
          </Container>
        </StyledConfirmModal>
      )}
    </>
  );
};

export const ConfirmModal: FC<ConfirmModalProps> = (args) => <ConfirmModalUI {...args} />;
