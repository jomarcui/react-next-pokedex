import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import Textbox from "../Textbox";

describe("Textbox", () => {
  it("should render", () => {
    const { getByRole } = render(<Textbox placeholder="Sample placeholder" />);

    const textbox = getByRole("textbox", { name: "pokemon-search" });

    expect(textbox).toBeInTheDocument();
  });

  it("should accept text input", () => {
    const { getByRole } = render(<Textbox placeholder="Sample placeholder" />);

    const textbox = getByRole("textbox", { name: "pokemon-search" });

    fireEvent.change(textbox, { target: { value: "pokemon" } });

    expect(textbox).toHaveValue("pokemon");
  });
});
