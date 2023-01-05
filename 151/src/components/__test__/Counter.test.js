import { render } from "@testing-library/react";
import { Counter } from "../Counter";

test("render the textarea", () => {
    const { getByPlaceholderText } = render(<Counter />);
    const textArea = getByPlaceholderText("Type or paste your text");
    expect(textArea).toBeTruthy();
});