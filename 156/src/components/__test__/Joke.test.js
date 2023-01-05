import { render, screen, waitFor } from "@testing-library/react";
import { Joke } from "../Joke";

describe('Test Joke Component', () => { 

    test("render joke text", async () => {
        const { getByTestId } = render(<Joke />);
        const jokeHeadline = getByTestId("jokeHeadline");
        await waitFor(() => expect(jokeHeadline.innerHTML).toBeTruthy());
    });

 });