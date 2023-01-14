import { useState } from 'react';
import { formatIncomeToMoney, removeCommas } from '../utils/convert';

const timeOptions = {
  weekly: 'weekly',
  fortnightly: 'fortnightly',
  monthly: 'monthly',
  annualy: 'annualy',
};

const useDetails = (onCalculate) => {
  const [totalIncome, setTotalIncome] = useState('');
  const [timeType, setTimeType] = useState(timeOptions.monthly);
  const [incomeType, setIncomeType] = useState({
    gross: false,
    net: false,
  });

  const inputChangeHandler = (e) => {
    const money = formatIncomeToMoney(e.target.value);
    setTotalIncome(money);
  };

  const calculateHandler = (e) => {
    e.preventDefault();
    const income = removeCommas(totalIncome);
    if ((!incomeType.gross && !incomeType.net) || !totalIncome || income < 0)
      return;

    let moneyGross = {
      weekly: 0,
      fortnightly: 0,
      monthly: 0,
      annualy: 0,
    };

    let moneyNet = {
      weekly: 0,
      fortnightly: 0,
      monthly: 0,
      annualy: 0,
    };

    let amountNet, amountGross;

    if (incomeType.gross) {
      amountGross = income;
      amountNet = Math.floor(amountGross * 0.8);
    } else if (incomeType.net) {
      amountNet = income;
      amountGross = Math.floor(amountNet * 1.2);
    }

    if (timeType === timeOptions.weekly) {
      moneyGross = {
        weekly: amountGross,
        fortnightly: 2 * amountGross,
        monthly: 4 * amountGross,
        annualy: 48 * amountGross,
      };
      moneyNet = {
        weekly: amountNet,
        fortnightly: 2 * amountNet,
        monthly: 4 * amountNet,
        annualy: 48 * amountNet,
      };
    } else if (timeType === timeOptions.fortnightly) {
      moneyGross = {
        weekly: Math.floor(amountGross / 2),
        fortnightly: amountGross,
        monthly: 2 * amountGross,
        annualy: 24 * amountGross,
      };
      moneyNet = {
        weekly: Math.floor(amountNet / 2),
        fortnightly: amountNet,
        monthly: 2 * amountNet,
        annualy: 24 * amountNet,
      };
    } else if (timeType === timeOptions.monthly) {
      moneyGross = {
        weekly: Math.floor(amountGross / 4),
        fortnightly: Math.floor(amountGross / 2),
        monthly: amountGross,
        annualy: 12 * amountGross,
      };
      moneyNet = {
        weekly: Math.floor(amountNet / 4),
        fortnightly: Math.floor(amountNet / 2),
        monthly: amountNet,
        annualy: 12 * amountNet,
      };
    } else {
      moneyGross = {
        weekly: Math.floor(amountGross / 48),
        fortnightly: Math.floor(amountGross / 24),
        monthly: Math.floor(amountGross / 12),
        annualy: amountGross,
      };
      moneyNet = {
        weekly: Math.floor(amountNet / 48),
        fortnightly: Math.floor(amountNet / 24),
        monthly: Math.floor(amountNet / 12),
        annualy: amountNet,
      };
    }

    const tax = {
      weekly: moneyGross.weekly - moneyNet.weekly,
      fortnightly: moneyGross.fortnightly - moneyNet.fortnightly,
      monthly: moneyGross.monthly - moneyNet.monthly,
      annualy: moneyGross.annualy - moneyNet.annualy,
    };

    // convert to money
    for (let time in moneyNet) {
      moneyNet[time] = formatIncomeToMoney(moneyNet[time]);
    }

    for (let time in moneyGross) {
      moneyGross[time] = formatIncomeToMoney(moneyGross[time]);
    }

    for (let time in tax) {
      tax[time] = formatIncomeToMoney(tax[time]);
    }

    const data = {
      tax,
      moneyNet,
      moneyGross,
      incomeType: incomeType.gross ? 'gross' : 'net',
      selectedTimeType: timeType,
    };
    onCalculate(data);
  };

  return {
    incomeType,
    totalIncome,
    timeType,
    inputChangeHandler,
    setTimeType,
    setIncomeType,
    calculateHandler,
  };
};
export default useDetails;
