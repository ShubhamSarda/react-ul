import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Counter } from "../Counter";

describe("Counter Component Test", () => {

    test("render the textarea", () => {
        const { getByPlaceholderText } = render(<Counter />);
        const textArea = getByPlaceholderText("Type or paste your text");
        expect(textArea).toBeTruthy();
    });
    
    test("render the character result", () => {
        const { getByTestId } = render(<Counter />);
        const charLength = getByTestId("charLength");
        expect(charLength.innerHTML).toBe("Character: 0");
    });

    test("render the word result", () => {
        render(<Counter />);
        const wordLength = screen.getByText("Word: 0");
        expect(wordLength).toBeInTheDocument();
    });

});

