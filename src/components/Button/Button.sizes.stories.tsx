import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button, ButtonProps } from ".";

export default {
  title: "Components/Button/sizes",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};
