import { useState } from 'react';
import './App.css';
import FormWrapper from './FormWrapper';
import CalculatorWrapper from './CalculatorWrapper';
import { OperandContext } from './context/OperandContext';

function App() {
  const [operand, setOperand] = useState(0);

  return (
    <main>
      <heading>
        <h1>MultiCalc</h1>
      </heading>
      <OperandContext.Provider value={{ operand, setOperand }}>
        <FormWrapper />
        <CalculatorWrapper />
      </OperandContext.Provider>
    </main>
  );
}

export default App;
