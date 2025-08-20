import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Form from './Form';
import { OperandContext } from './context/OperandContext';

describe('Form', () => {
    it('disables button when operand contains no value', async() => {
        const user = userEvent.setup();

      render(<OperandContext.Provider value={{ operand:0, setOperand: () => {} }}><Form /></OperandContext.Provider>);

      //find elements
      const input = screen.getByLabelText('Calculate with:');
      const button = screen.getByRole('button', { name: 'Submit'});

      //clear input to make empty
      await user.clear(input);

      //button should be diabled
      expect(button).toBeDisabled();
    });
});
