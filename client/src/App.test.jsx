import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import App from "./App";


describe("App component", () => {
    it("Should render the App component correctly", () => {
        render(<App/>);
        const heading = screen.getByRole("heading", {name: "Waiting for input..."});
        const input = screen.getByRole("textbox");
        const button = screen.getByRole("button", {name: "search"});
        expect(heading).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    it("Should update the search value when user types in the input",  () => {
        render(<App/>);
        const input = screen.getByRole("textbox");
        userEvent.type(input, 'hello world')
        expect(input.value).toBe('hello world')
        
    });

    it("Should show an error message if form is submitted without an input", () => {
        render(<App/>);
        const button = screen.getByRole("button", {name: "search"});
        userEvent.click(button);
        const heading = screen.getByRole("heading", {name: "Please type in a movie name"});
        expect(heading).toBeInTheDocument();
    });

})