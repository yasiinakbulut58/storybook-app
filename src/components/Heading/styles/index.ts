import styled from 'styled-components';

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const StyledHeading = styled.h1<HeadingProps>`
  font-weight: 600;
  line-height: 125.3%;
  color: ${(props) => props.theme.colors.shade.shade100};
  font-size: ${(props) =>
    props.theme.fontSizes[props.as]
      ? props.theme.fontSizes[props.as]
      : props.theme.fontSizes.normal};
  ${(props) => {
    switch (props.as) {
      case 'h6':
        return `letter-spacing: 0.03em;
        text-transform: uppercase;`;
      default:
        return '';
    }
  }}
`;
