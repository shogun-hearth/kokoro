import React from 'react';
import { CardContent as MuiCardContent } from '@mui/material';
import { css, SerializedStyles } from '@emotion/react';
import { CardContentProps as MuiCardContentProps } from '@mui/material/CardContent';

import { CardColorProperty } from '../Card/Card';

export interface CardContentProps extends Omit<MuiCardContentProps, 'css'>,
  CardColorProperty {
  css?: SerializedStyles;
}

const base = (bg: Color) => css`
  background-color: ${bg};
`;

const CardContent = ({
  children,
  bg,
  css,
  ...props
}: CardContentProps): JSX.Element => (
  <MuiCardContent
    css={[base(bg ?? 'inherit'), css]}
    {...props}
  >
    {children}
  </MuiCardContent>
);

export default CardContent;