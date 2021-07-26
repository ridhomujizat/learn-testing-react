import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import App from "../App";

jest.mock("axios");

describe("Testing seluru aplikasi", () => {
  it("melakukan test untuk list user", async () => {
    const users = [
      {
        id: 1,
        name: "Ridho",
      },
      {
        id: 2,
        name: "abdule",
      },
      {
        id: 3,
        name: "jamal",
      },
    ];

    axios.get.mockImplementation(() => Promise.resolve({ data: users }));
    render(<App />);

    const btn = screen.getByTestId("get-user");
    userEvent.click(btn);

    await waitFor(() =>
      expect(screen.getAllByTestId("user-name")).toHaveLength(users.length)
    );
  });
});
