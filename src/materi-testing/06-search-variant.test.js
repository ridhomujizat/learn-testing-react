import { render, screen } from "@testing-library/react";
import App from "../App";
import { data } from "./CompVariant";
describe("Testing semua aplikasi di dalam app", () => {
  it("melakukan testing untuk queryBy dan findBy", async () => {
    render(<App />);
    expect(screen.queryByText(/Selamat datang/)).toBeNull();
    expect(await screen.findByText(/Selamat datang/)).toBeInTheDocument();
  });

  it("melakukan render sebanyak hari", () => {
    render(<App />);
    expect(screen.getAllByTestId("hari")).toHaveLength(data.length);
  });
});
