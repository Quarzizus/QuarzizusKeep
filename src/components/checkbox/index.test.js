import React from "react";
import {
  render,
  act,
  screen,
  fireEvent,
  getByRole,
} from "@testing-library/react";
import { CheckBox } from ".";

describe("<Checkbox>", () => {
  let component;
  const props = {
    cb: () => {},
    isChecked: false,
  };
  beforeEach(() => {
    component = render(<CheckBox {...props} />);
  });

  it("It must Render", () => {
    expect(component).toBeDefined();
  });
  it("It must show icon checked when we do click", () => {
    const icon = screen.getByRole("figure");
    expect(icon).toBeUndefined();
    fireEvent.click(component);
    expect(icon).toBeDefined();
  });
});
