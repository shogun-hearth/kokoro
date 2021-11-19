import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import InformationCard from './InformationCard';
import LineItem, { LineItemProps } from './LineItem';

export default {
  title: 'Molecules/LineItem',
  decorators: [withDesign],
  component: InformationCard,
  parameters: {
    actions: { disabled: true },
    layout: 'centered',
  },
  argTypes: {
    leftContent: {
      defaultValue: 'Personal note',
      name: 'title',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'Subtotal' },
      },
    },
    rightContent: {
      defaultValue: 'Personal note',
      name: 'title',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'Subtotal' },
      },
    },
    spacing: {
      name: 'Space between',
      control: { type: 'number' },
    },
  },
} as Meta;

const lineItemTemplate: Story<LineItemProps> = (args) => (
  <LineItem {...args} />
);

export const LineItemComponent = lineItemTemplate.bind({});

LineItemComponent.argTypes = {
  color: {
    table: {
      disable: true,
    },
  },
};
