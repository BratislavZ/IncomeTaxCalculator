import { useState } from 'react';

const useApp = () => {
  const [data, setData] = useState();
  const [isIncomeDetailsShown, setisIncomeDetailsShown] = useState(true);
  const [isIncomeShown, setIsIncomeShown] = useState(false);

  const calculateHandler = (calculatedData) => {
    setData(calculatedData);
    showIncomeCard();
  };

  const showIncomeCard = () => {
    setisIncomeDetailsShown(false);
    setIsIncomeShown(true);
  };

  const showIncomeDetailsCard = () => {
    setisIncomeDetailsShown(true);
    setIsIncomeShown(false);
  };

  return {
    data,
    isIncomeDetailsShown,
    isIncomeShown,
    calculateHandler,
    showIncomeCard,
    showIncomeDetailsCard,
  };
};

export default useApp;
