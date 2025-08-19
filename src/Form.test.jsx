import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { render, screen } from '@testing-library/react';
import { OperandContext } from './context/OperandContext';
import Form from './Form';

describe("Form tests", () => {
    it("Asserts the button is disabled when no value in form", () => {
        const operand = 0;
        render(
            <OperandContext.Provider value={{ operand }}>
                <Form />
            </OperandContext.Provider>
        );
        //   expect(screen.getByRole('button')).toBeInTheDocument(); // passed
        const field = screen.getByRole('spinbutton');
        const button = screen.getByRole('button');
        //    expect(button).toHaveTextContent('Submit'); // passed
        userEvent.clear(field);

        expect(button).toBeDisabled();
    })
})