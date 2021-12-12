import styled from 'styled-components';
import { cover, position } from 'polished';
import { ConfirmModalProps } from '../';

export const StyledConfirmModal = styled.div<ConfirmModalProps>`
  ${position('fixed', 0)};
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    ${cover()};
    backdrop-filter: blur(2.1px);
    background-color: ${(props) =>
      props.scrimMode === 'dark'
        ? props.theme.colors.shade.shade50
        : props.theme.colors.shade.shade10};
  }
`;

export const Footer = styled.div<ConfirmModalProps>`
  display: flex;
  height: 52px;
  justify-content: end;
  align-items: center;
  background: ${(props) => props.theme.colors.shade.shade5};
  padding: 0 16px;
`;

export const Header = styled.div<ConfirmModalProps>`
  padding: 24px 24px 16px;
`;

export const ConfirmModalBody = styled.div<ConfirmModalProps>`
  padding: 0 24px 24px;
`;

export const Container = styled.div<ConfirmModalProps>`
  z-index: 5;
  position: relative;
  max-width: 522px;
  width: 100%;
  background: ${(props) => props.theme.colors.base.light};
  border: ${(props) => `1px solid ${props.theme.colors.shade.shade5}`};
  box-shadow: ${(props) =>
    `0px 18px 64px -8px ${props.theme.colors.shade.shade40} 0px 4px 24px -3px ${props.theme.colors.shade.shade20}`};
  border-radius: 4px;
`;
