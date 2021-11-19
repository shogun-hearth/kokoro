import React from 'react';
import { CardHeader as MuiCardHeader, Divider } from '@mui/material';
import { css } from '@emotion/react';
import { CardHeaderProps as MuiCardHeaderProps } from '@mui/material/CardHeader';

import { CardColorProperty } from './Card';

export interface CardHeaderProps extends MuiCardHeaderProps, CardColorProperty {
  bottomDivider?: boolean;
}

const CardHeader = ({
  bottomDivider,
  children,
  bg,
  ...props
}: CardHeaderProps): JSX.Element => (
  <>
    <MuiCardHeader
      // TODO(design_system): move this out into a composable module
      css={css`
        &.MuiCardHeader-root {
          padding: 24px 24px ${bottomDivider ? '16px' : 0};
          background-color: ${bg ?? 'inherit'};
        }
      `}
      title={children}
      {...props}
    />
    {bottomDivider &&
      <Divider />
    }
  </>
);

export default CardHeader;