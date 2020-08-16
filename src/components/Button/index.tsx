import React from "react";
import styled from "@emotion/styled";
import { space } from "styled-system";
import { type, size } from "./variants";

export interface ButtonProps {
  variant?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

const StyledButton = styled("button")(space, type, size);
/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "large",
  ...props
}) => {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {label}
    </StyledButton>
  );
};
