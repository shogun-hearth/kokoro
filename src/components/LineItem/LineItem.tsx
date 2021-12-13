import React from 'react';
import { Box } from '@mui/material';
import { css } from '@emotion/react';

import Typography from '../Typography';

export interface LineItemProps {
  /* left side element */
  leftContent: React.ReactNode;
  /* right side element */
  rightContent: React.ReactNode;
  /* total width of the LineItem; by default takes up the full width of its container */
  width?: number | string;
}

const LineItem = ({
  leftContent,
  rightContent,
  width = '100%',
}: LineItemProps): JSX.Element => (
  <Box sx={{ display: 'flex', width }}>
    <Typography variant="p1" color="basic1100">
      {leftContent}
    </Typography>
      <Box
        css={css`
          background-image: linear-gradient(to right, black 10%, rgba(255,255,255,0) 0%);
          background-image: -webkit-linear-gradient(to right, black 10%, rgba(255,255,255,0) 0%);
          background-position: center;
          background-size: 10px 1px;
          background-repeat: repeat-x;
          flex: 1;
          margin-left: 8px;
          margin-right: 8px;
        `}
      />
    <Typography variant="p1" color="basic1100">
      {rightContent}
    </Typography>
  </Box>
);

export default LineItem;