import styled from 'styled-components';

type TextProps = {
  size: 'normal' | 'small' | 'xsmall';
};

export const StyledText = styled.div<TextProps>`
  font-weight: normal;
  color: ${(props) => props.theme.colors.shade.shade90};

  ${(props) => {
    switch (props.size) {
      case 'normal':
        return `
          font-size: ${props.theme.fontSizes.normal};
          line-height: 161.1%;
        `;
      case 'small':
        return `
          font-size: ${props.theme.fontSizes.small};
          line-height: 134%;
        `;
      case 'xsmall':
        return `
          font-size: ${props.theme.fontSizes.xsmall};
          line-height: 122%;
        `;
      default:
        return `
        font-size: ${props.theme.fontSizes.normal};
        line-height: 161.1%;
      `;
    }
  }}
`;
