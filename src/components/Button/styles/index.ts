import styled from 'styled-components';

type ButtonProps = {
  color: 'primary' | 'dark' | 'success' | 'error';
  variant: 'text' | 'withBackground';
  type: 'button' | 'submit' | 'reset';
  disabled: boolean;
};

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  min-width: 80px;
  height: 36px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.normal};
  line-height: 19px;
  text-align: center;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) =>
    props.variant === 'text'
      ? props.theme.colors[props.color].light
      : props.theme.colors.base.light};
  background: ${(props) =>
    props.variant === 'text' ? 'transparent' : props.theme.colors[props.color].light};
  &:hover {
    background: ${(props) =>
      props.variant === 'text' ? 'transparent' : props.theme.colors[props.color].textLight};
  }
  &:disabled {
    opacity: 0.5;
    color: ${(props) =>
      props.variant === 'text'
        ? props.theme.colors[props.color].light
        : props.theme.colors.base.light};
    box-shadow: none !important;
  }
`;
