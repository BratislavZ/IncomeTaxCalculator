import { useEffect, useState } from 'react';

const useIncome = (data) => {
  const [timeType, setTimeType] = useState('');

  useEffect(() => {
    setTimeType(data?.selectedTimeType || 'monthly');
  }, [data]);

  const getMoney = () => {
    if (data?.incomeType === 'gross') {
      return data?.moneyGross[timeType];
    } else if (data?.incomeType === 'net') {
      return data?.moneyNet[timeType];
    }
  };

  return { timeType, setTimeType, getMoney };
};

export default useIncome;
