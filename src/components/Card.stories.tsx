import React from 'react';
import { Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import Card, { CardProps } from './Card';
import CardHeader from './CardHeader';
import CardContent from './CardContent';

import theme, { colors } from '../assets/theme';

type CardStoryProps = CardProps & {
  borderColor: Color;
  bgColor: Color;
  type: 'filled' | 'outlined';
}

export default {
  title: 'Atoms/Card',
  decorators: [withDesign],
  component: Card,
  parameters: {
    actions: { disabled: true },
    layout: 'centered',
  },
  argTypes: {
    children: {
      name: 'content',
      control: {
        type: 'text',
      },
    },
    borderColor: {
      value: 'basic1100',
      control: { type: 'select' },
      options: Object.keys({ ...theme.palette.common }),
      mapping: colors,
    },
    bgColor: {
      value: 'basic1100',
      control: { type: 'select' },
      options: Object.keys({ ...theme.palette.common }),
      mapping: colors,
    },
  },
} as Meta;

export const card = ({
  children,
  bgColor,
  borderColor,
  ...args
}: CardStoryProps): JSX.Element => {
  console.log('outlined', borderColor, args);
  return (
    <Card border={borderColor} bg={bgColor} {...args}>
      <CardHeader bottomDivider>
        This is a card.
      </CardHeader>
      <CardContent sx={{ px: 3 }}>
        {children}
      </CardContent>
    </Card>
  );
};

card.argTypes = {
  color: {
    table: {
      disable: true,
    },
  },
};
