import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { OperandContext } from './context/OperandContext';
import Calculator from './Calculator';

export default function Calculator() {
  const { operand } = useContext(OperandContext);

  const cubed = operand ** 3;
  const multiplyByThree = operand * 3;

  return (
    <div>
      <div>
        <span>Cubed</span>
        <span>{cubed}</span>
      </div>
      <div>
        <span>Multiply by 3</span>
        <span>{multiplyByThree}</span>
      </div>
    </div>
  );
}
