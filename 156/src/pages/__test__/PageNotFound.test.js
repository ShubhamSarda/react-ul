import { render } from "@testing-library/react";
import { PageNotFound } from "../PageNotFound";
import { BrowserRouter } from "react-router-dom";

describe("Test PageNotFound Page", () => {

    test("render text and image", () => {
        const { getByTestId, getByAltText } = render(<PageNotFound />, { wrapper: BrowserRouter });
        const pnfText = getByTestId("pnfText");
        const pnfImage = getByAltText("Page Not Found");
        
        expect(pnfText.innerHTML).toBe("Oops - Page Not Found!");
        expect(pnfImage).toBeTruthy();
    });

});