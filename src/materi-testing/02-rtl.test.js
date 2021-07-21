import { screen, render } from "@testing-library/react";
import App from "../App";

test("menyapa orang", () => {
  render(<App />);
  const text = screen.getByText("Hello Ridho");
  expect(text).toBeInTheDocument();
});
