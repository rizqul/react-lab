import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import { userEvent } from "@testing-library/user-event";

describe("Counter", () => {
  // 1. kita harus check apakah componentnya di render atau tidak
  it("component berhasil di render", () => {
    // Arrange
    render(<Counter />);

    // Act
    const resultUI = screen.getByRole("heading", {
      name: "Counter : 0",
    });

    // Assert
    expect(resultUI).toBeInTheDocument();
  });

  // 2. check logic -> check increment dan check decrement
  it("counter bertambah ketika button inc di klik", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<Counter />);

    // Act
    await user.click(
      screen.getByRole("button", {
        name: "Plus",
      }),
    );

    const resultUI = screen.getByRole("heading", {
      name: "Counter : 1",
    });

    // Assert
    expect(resultUI).toBeInTheDocument();
  });
});
