import React from 'react';
import { Theme, Typography as MuiTypography } from '@mui/material';
import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import cx from 'classnames';

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

type StyleProps = {
  weight?: FontWeightVariant;
  color?: Color;
}

const useStyles = makeStyles<Theme, StyleProps>({
  overrides: ({ weight, color }) => ({
    fontWeight: weight ? fontWeights[weight] : 'inherit',
    color: color ? colors[color] : 'inherit',
  }),
});

export interface TypographyProps extends MuiTypographyProps {
  weight?: FontWeightVariant;
  color?: Color;
}

const Typography = ({
  weight,
  children,
  color,
  ...props
}: TypographyProps): JSX.Element => {
  const classes = useStyles({ weight, color });

  return (
    <MuiTypography
      {...props}
      className={cx(props.className, classes.overrides)}
    >
      {children}
    </MuiTypography>
  );
};

export default Typography;
