import { useState } from 'react';
import './App.css';
import FormWrapper from './FormWrapper';
import CalculatorWrapper from './CalculatorWrapper';
import { OperandContext } from './context/OperandContext';

function App() {
  const [operand, setOperand] = useState(0);

  return (
    <main>
      <h1 aria-label='Multi-Calc'>MultiCalc</h1>
      <OperandContext.Provider value={{ operand, setOperand }}>
        <FormWrapper />
        <CalculatorWrapper />
      </OperandContext.Provider>
    </main>
  );
}

export default App;
