import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Form from './Form.jsx';
import { OperandContext } from './context/OperandContext.jsx';

describe('Form', () => {
    it('disables the submit button when the operand is empty', async () => {
        const user = userEvent.setup();
        render(
            <OperandContext.Provider value = {{operand: 5, setOperand: () => {}}}>
                <Form/>
            </OperandContext.Provider>
        );
        //Find the input field - hint: Get by role
        const input = screen.getByRole('spinbutton');
         // Clear the input (simulate user deleting the default value)
        await user.clear(input);
        //Find the button
        const button = screen.getByRole('button', {name:/submit/i });

        //Expect it to be disabled - hint: toBeDisabled is a command
        expect(button).toBeDisabled();
    })
});
