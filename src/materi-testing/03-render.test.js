import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Testing untuk seluruh App", () => {
  it("memunculkan seluruh html view dari app", () => {
    render(<App />);
    // screen.debug();
    const btn = screen.getByTestId("button-fireEvent");
    fireEvent.click(btn);
    // screen.debug();
  });
});
