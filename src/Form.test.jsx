import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';
// TODO: Actually run the test cus I feel like I created some spaghetti code since I'm not completely clear on how to write tests
describe('Form', () => {
  it('disables the submit button when the input field is empty', () => {
    render(<Form />);
    const inputField = screen.getByTestId('input');
    const submitButton = screen.getByLabelText('Submit');
    const user = userEvent.setUp();

    user.clear(inputField);
    expect(inputField).toHaveValue('');
    expect(submitButton).toBeDisabled();
  });
});
