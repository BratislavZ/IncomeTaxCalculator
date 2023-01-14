import React from 'react';
import Income from './components/Income';
import IncomeDetails from './components/IncomeDetails';
import useApp from './hooks/useApp';
import './index.css';

const App = () => {
  const {
    data,
    isIncomeDetailsShown,
    isIncomeShown,
    showIncomeCard,
    showIncomeDetailsCard,
    calculateHandler,
  } = useApp();

  const unselectedStyle = 'w-1/2 text-center p-3 bg-sky-100 cursor-pointer ';

  const incomeStyle = () => {
    let style = unselectedStyle + 'border-r-[2px] ';
    if (isIncomeShown) {
      style += 'bg-sky-300';
    }
    return style;
  };

  const incomeDetailsStyle = () => {
    let style = unselectedStyle + 'border-l-[2px] ';
    if (isIncomeDetailsShown) {
      style += 'bg-sky-300';
    }
    return style;
  };

  return (
    <div className="flex flex-col	justify-center items-center h-screen">
      <div className="border border-b-0 overflow-hidden w-[400px] flex text-[25px] rounded-t-lg">
        <div className={incomeStyle()} onClick={showIncomeCard}>
          Income
        </div>
        <div className={incomeDetailsStyle()} onClick={showIncomeDetailsCard}>
          Income Details
        </div>
      </div>
      {isIncomeDetailsShown && (
        <IncomeDetails
          onCalculate={(calculatedData) => calculateHandler(calculatedData)}
        />
      )}
      {isIncomeShown && <Income data={data} />}
    </div>
  );
};

export default App;
