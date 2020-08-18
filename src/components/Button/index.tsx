import React from "react";
import styled from "@emotion/styled";
import { space } from "styled-system";
import { type, size } from "./variants";

interface StyledButtonProps {
  variant?: string;
  size: "small" | "medium" | "large";
  onClick?: () => void;
}

const StyledButton = styled("button")<StyledButtonProps>(space, type, size);

export interface ButtonProps extends StyledButtonProps {
  label: string;
}

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
