import { Meta } from '@storybook/react';
import { Box } from '@mui/material';
import { withDesign } from 'storybook-addon-designs';

import Typography, { TypographyProps, fontWeights } from './Typography';

export default {
  title: 'UI Elements/Typography',
  decorators: [withDesign],
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    weight: {
      options: ['regular', 'medium', 'semibold'],
      defaultValue: 'regular',
      control: 'radio',
    },
    children: {
      name: 'content',
      type: 'text',
      control: {
        type: 'text',
      },
    },
  },
} as Meta;

const variants: TypographyProps['variant'][] = ['h1', 'h2', 'p1', 'p2', 'p3'];

type TypographyMetadata = {
  type: 'Heading' | 'Body';
  size: number;
  lineHeight: number;
}

const typographyArgs = (variant: TypographyProps['variant']): TypographyMetadata => {
  switch (variant) {
    case 'h1':
      return {
        type: 'Heading',
        size: 24,
        lineHeight: 36,
      };
    case 'h2':
      return {
        type: 'Heading',
        size: 20,
        lineHeight: 28,
      };
    case 'p2':
      return {
        type: 'Body',
        size: 14,
        lineHeight: 20,
      }
    case 'p3':
      return {
        type: 'Body',
        size: 12,
        lineHeight: 16,
      }
    default:
    case 'p1':
      return {
        type: 'Body',
        size: 16,
        lineHeight: 24,
      }
  }
};

export const typography = ({ children, ...args }: TypographyProps): JSX.Element => (
  <Box sx={{ display: 'flex', flexDirection: 'column', padding: 4 }}>
    {variants.map(variantName => {
      const { type, size, lineHeight } = typographyArgs(variantName);
      return (
        <Box sx={{ mb: 2 }} key={variantName}>
          <Typography variant={variantName} {...args}>
            {children || `${variantName}. ${type}`}
          </Typography>
          <Box sx={{ mt: 0.5 }}>
            <Typography
              color="basic300"
              weight="regular"
              sx={{ fontSize: 14 }}
            >
              {size}pt |{' '}
              {args.weight} {args.weight ? `(${fontWeights[args.weight]})` : ''},
              LH {lineHeight}
            </Typography>
          </Box>
        </Box>
      );
    })}
  </Box>
);

typography.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/M7Z0RpYEQszVSWhAFs2yAe/Design-System?node-id=1464%3A463',
  },
};
