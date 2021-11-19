import React from 'react';
import { Box } from '@mui/material';
import { css } from '@emotion/react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import Typography from './Typography';

export interface LineItemProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  spacing?: number;
}

const LineItem = ({
  leftContent,
  rightContent,
  spacing = 4,
}: LineItemProps): JSX.Element => (
  <Box
    css={
      css`
      display: flex;
      justify-content: space-between;
    `}
  >
    <Typography variant="p1" color="basic1100">
      {leftContent}
    </Typography>
    <Box
      css={
        css`
        display: flex;
        justify-content: space-between;
        alignItems: center;
      `}
    >
      {[...Array(spacing)].map(() =>
        <Box mr={2} fontSize="4px" alignSelf="flex-end">
          <FiberManualRecordIcon fontSize="inherit" />
        </Box>
      )}
    </Box>
    <Typography variant="p1" color="basic1100">
      {rightContent}
    </Typography>
  </Box>
);

export default LineItem;