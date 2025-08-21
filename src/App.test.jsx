import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { OperandContext } from './context/OperandContext';
import Calculator from './Calculator';

describe('Calculator', () => {
  it('calculates cubed value correctly', () => {
    const operand = 2;
    render(
      <OperandContext.Provider value={{ operand }}>
        <Calculator />
      </OperandContext.Provider>
    );

    const cubedResult = screen.getByText('Cubed').nextSibling.textContent;
    expect(cubedResult).toBe('8'); // 2 ** 3 = 8
  });

  it('calculates multiply by three value correctly', () => {
    const operand = 3;
    render(
      <OperandContext.Provider value={{ operand }}>
        <Calculator />
      </OperandContext.Provider>
    );

    const multiplyByThreeResult =
      screen.getByText('Multiply by 3').nextSibling.textContent;
    expect(multiplyByThreeResult).toBe('9'); // 3 * 3 = 9
  });
});
