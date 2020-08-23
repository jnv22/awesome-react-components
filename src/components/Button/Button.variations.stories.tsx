import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button, ButtonProps } from ".";

export default {
  title: "Components/Button/variations",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  size: "small",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  size: "small",
  label: "Button",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  size: "small",
  label: "Button",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
  size: "small",
  label: "Button",
};
