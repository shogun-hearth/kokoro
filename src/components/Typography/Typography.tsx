import React from 'react';
import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from '@mui/material/Typography';
import { css } from '@emotion/react';

import colors from 'assets/colors';

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

declare module '@mui/material/styles' {
  interface TypographyVariants {
    p1: React.CSSProperties;
    p2: React.CSSProperties;
    p3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    p1?: React.CSSProperties;
    p2?: React.CSSProperties;
    p3?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    p1: true;
    p2: true;
    p3: true;
  }
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
