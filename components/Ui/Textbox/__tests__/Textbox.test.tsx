import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Textbox from "../Textbox";

describe("Textbox", () => {
  it("should render", () => {
    render(<Textbox placeholder="Sample placeholder" />);

    const textboxContainer = document.querySelector(".jsTextboxContainer");

    expect(textboxContainer).toBeInTheDocument();
  });
});
