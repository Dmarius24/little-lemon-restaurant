import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Customer from './Customer';

describe ('Check the name format', () => {

    test('render date input', () => {
    render(<Customer />);
 
    const test2 = screen.getByTestId("name-input");
    expect(test2).toBeInTheDocument();
    expect(test2).toHaveAttribute("type", "name");
  });
    test("If the name is correct", () => {
        render(<Customer />);

        const test2 = screen.getByTestId("name-input");
        userEvent.type(test2, "John");

    expect(screen.getByTestId("name-input")).toHaveValue("John");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    });
    test('pass invalid nate to test input value', () => {
    render(<Customer />);
 
    const test2 = screen.getByTestId("name-input");
    userEvent.type(test2, "test");
 
    expect(screen.getByTestId("name-input")).toHaveValue("test");
    expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
    expect(screen.queryByTestId("error-msg").textContent).toEqual("Please enter a valid name.");
  });
})