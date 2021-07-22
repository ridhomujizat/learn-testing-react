import { screen, render, fireEvent } from "@testing-library/react";
import App from "../App";

describe("Testing untuk seluruh App saat pertama render", () => {
  it("memastikan konten p itu ada", () => {
    render(<App />);
    const textP = screen.getByText("Saya sedang sembunyi");
    expect(textP).toBeInTheDocument();
  });

  it("memeastikan komponen Btn itu ada", () => {
    render(<App />);
    const textBtn = screen.getByText("Munculkan");
    expect(textBtn).toBeInTheDocument();
  });
});

describe("Testing untuk seluruh App setelah melakukan action click pada button", () => {
  it("Memastikan kontent text P sesuai setelah action click button", () => {
    render(<App />);
    const textButton = screen.getByText("Munculkan");
    fireEvent.click(textButton);

    const textNewButton = screen.getByText("Saya sedang muncul");
    expect(textNewButton).toBeInTheDocument();
  });

  it("Memastikan kontent button sesuai setelah action click button", () => {
    render(<App />);
    const textBtn = screen.getByText("Munculkan");
    fireEvent.click(textBtn);
    const textBtnResult = screen.getByText("Sembunyikan");
    expect(textBtnResult).toBeInTheDocument();
  });
});
