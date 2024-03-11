import { Story, Meta } from '@storybook/react';
import React from 'react';

import LinkButton from './LinkButton';
import LinkButtonProps from './LinkButton';

export default {
  title: 'Components/Atoms/LinkButton',
  component: LinkButton
} as Meta;

const Template: Story<typeof LinkButtonProps> = (args) => <LinkButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: '/',
  label: 'ホーム'
};

export const About = Template.bind({});
About.args = {
  href: '/about',
  label: 'アバウト'
};
