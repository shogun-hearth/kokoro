import React from 'react';
import { Typography as MuiTypography } from '@mui/material';
import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { css } from '@emotion/react';

import colors from '../../assets/colors';

export type FontWeightVariant = 'regular' | 'medium' | 'semibold';
export type FontWeightValue = 400 | 500 | 600;

type FontWeight = {
  [w in FontWeightVariant]: FontWeightValue;
};

export const fontWeights: FontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
};

export interface TypographyProps extends MuiTypographyProps {
  weight?: FontWeightVariant;
  color?: Color;
}

const Typography = ({
  weight,
  children,
  color,
  ...props
}: TypographyProps): JSX.Element => (
  <MuiTypography
    css={css`
      font-weight: ${weight ? fontWeights[weight] : 'inherit'};
      color: ${color ? colors[color] : 'inherit'}
    `}
    {...props}
  >
    {children}
  </MuiTypography>
);

export default Typography;
