import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./index";
import userEvent from "@testing-library/user-event";

describe("Button tests", () => {
  it("renders content", () => {
    const label = "hello button";
    render(<Button label={label} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls onclick prop", () => {
    const onClick = jest.fn();
    const label = "Submit";
    render(<Button label={label} onClick={onClick} />);
    userEvent.click(screen.getByText(label));
    expect(onClick).toHaveBeenCalled();
  });
});
