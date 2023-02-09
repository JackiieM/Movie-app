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

    it("Should show an error message if form is submitted without an input", async () => {
        render(<App/>);
        const button = screen.getByRole("button", {name: "search"});
        userEvent.click(button);
        const heading = screen.getByRole("heading", {name: "Please type in a movie name"});
        expect(heading).toBeInTheDocument();
    });

    it("Should show an error message if no movie matches are found", async () => {
        render(<App/>);
        const button = screen.getByRole("button", {name: "search"});
        const input = screen.getByRole("textbox");
        userEvent.type(input, 'akfnjdkjd')
        userEvent.click(button)
        const heading = screen.getByRole("heading", {name: "No matches found"});
        expect(input).toHaveValue('akfnjdkjd');
    })
})