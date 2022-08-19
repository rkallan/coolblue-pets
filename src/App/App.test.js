import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders pet app text", () => {
    render(<App />);
    const textEl = screen.getByText(/Build your Pets App here/);
    expect(textEl).toBeInTheDocument();
});
