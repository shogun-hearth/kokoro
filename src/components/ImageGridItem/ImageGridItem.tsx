import { useState } from 'react';
import {
  Box,
  Dialog,
  ImageListItem as MuiImageItem,
  ImageListItemBar,
} from '@mui/material';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import { ImageListItemProps as MuiImageListItemProps } from '@mui/material/ImageListItem';
import { css, SerializedStyles } from '@emotion/react';

import Card from '../Card';

export interface ImageItem {
  src: string;
  alt: string;
}

export interface ImageGridItemProps extends MuiImageListItemProps {
  src: ImageItem['src'];
  alt: ImageItem['alt'];
  css?: SerializedStyles;
  action?: React.ReactNode;
}

const base = css`
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
`;

const ImageGridItem = ({
  src,
  alt,
  css,
  action,
  ...props
}: ImageGridItemProps): JSX.Element => {
  const [showBrokenImage, setShowBrokenImage] = useState(false);
  const [imageEnlarged, setImageEnlarged] = useState(false);

  if (showBrokenImage) {
    return (
      <Card border="basic700" bg="basic500">
        <Box css={base} sx={{ px: 8, py: 5 }}>
          <BrokenImageOutlinedIcon sx={{ color: 'common.basic700' }} fontSize="large" />
        </Box>
      </Card>
    );
  }

  return (
    <MuiImageItem css={[base, css]} {...props}>
      <img
        src={src}
        alt={alt}
        style={{ borderRadius: 8 }}
        onError={() => setShowBrokenImage(true)}
        onClick={() => setImageEnlarged(true)}
      />
      <ImageListItemBar
        sx={{
          background: 'none',
          // this makes the action element more visible when the color is similar to its background
          filter: 'drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.4))',
        }}
        position="top"
        actionPosition="right"
        actionIcon={action}
      />
      <Dialog open={imageEnlarged} onClose={() => setImageEnlarged(false)}>
        <img src={src} alt={alt} />
      </Dialog>
    </MuiImageItem>
  );
};

export default ImageGridItem;