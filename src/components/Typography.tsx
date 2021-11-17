import { Theme, Typography as MuiTypography } from '@mui/material';
import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import cx from 'classnames';

export enum FontWeight {
  REGULAR = 'regular',
  MEDIUM = 'medium',
  SEMIBOLD = 'semibold',
}

export const fontWeightValues: Record<FontWeight, number> = {
  [FontWeight.REGULAR]: 400,
  [FontWeight.MEDIUM]: 500,
  [FontWeight.SEMIBOLD]: 600,
};

type StyleProps = {
  weight: FontWeight;
  color: Color;
}

const useStyles = makeStyles<Theme, StyleProps>({
  overrides: ({ weight, color }) => ({
    fontWeight: fontWeightValues[weight],
    color,
  }),
});

export type TypographyProps = {
  weight?: FontWeight;
  color?: Color;
} & MuiTypographyProps;

const Typography = ({
  weight = FontWeight.REGULAR,
  children,
  color = 'basic1100',
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
