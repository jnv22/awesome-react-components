import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./index";

describe("Button tests", () => {
  it("renders content", () => {
    const label = "hello button";
    const { getByText } = render(<Button label={label} />);
    expect(getByText(label)).toBeInTheDocument();
  });

  it("calls onclick prop", () => {
    const onClick = jest.fn();

    const label = "Submit";
    const { getByText } = render(<Button label={label} onClick={onClick} />);
    fireEvent.click(
      getByText(label),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(onClick).toHaveBeenCalled();
  });
});
