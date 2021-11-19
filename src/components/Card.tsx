import React from 'react';
import { Card as MuiCard } from '@mui/material';
import { css } from '@emotion/react';
import { CardProps as MuiCardProps } from '@mui/material/Card';

export interface CardColorProperty {
  border?: Color;
  bg?: Color;
}

export interface CardProps extends MuiCardProps, CardColorProperty { }

const Card = ({
  border,
  children,
  bg = 'basic100',
  ...props
}: CardProps): JSX.Element => (
    <MuiCard
      elevation={0}
      css={
        css`
        border: ${border ? `1px solid ${border}` : 'inherit'};
        &.MuiPaper-root {
          background-color: ${bg};
        }
      `}
      {...props}
    >
      {children}
    </MuiCard>
);

export default Card;