import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Reserve from './Reserve';

describe('Check the date format', () => {

    test('render date input', () => {
    render(<Reserve />);
 
    const test1 = screen.getByTestId("date-input");
    expect(test1).toBeInTheDocument();
    expect(test1).toHaveAttribute("type", "date");
  });

    test("If the date is incorrect", () =>{
        render(<Reserve />);

        const test1 = screen.getByTestId("date-input");
        userEvent.type(test1, "02/14/2023");

    expect(screen.getByTestId("date-input")).toHaveValue("02/14/2023");
    expect(screen.queryByTestId("error-msg")).not.toBeInTheDocument();
    });

    test('pass invalid date to test input value', () => {
    render(<Reserve />);
 
    const test1 = screen.getByTestId("date-input");
    userEvent.type(test1, "test");
 
    expect(screen.getByTestId("date-input")).toHaveValue("test");
    expect(screen.queryByTestId("error-msg")).toBeInTheDocument();
    expect(screen.queryByTestId("error-msg").textContent).toEqual("Please enter a valid date.");
  });
});
