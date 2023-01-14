import React from 'react';
import useIncome from '../hooks/useIncome';
import Dropdown from './Dropdown';
import Table from './Table';

const Income = ({ data }) => {
  const { timeType, setTimeType, getMoney } = useIncome(data);

  return (
    <div className="shadow-card px-6 max-w-[800px] min-h-[450px] bg-[rgb(253,251,251)] rounded-lg	 ">
      <div>
        <img />
        <div className="text-[35px] text-center mb-8 mt-3 font-semibold">
          Income tax calculator
        </div>
      </div>
      <div>
        <div className="flex items-center mb-8 gap-[15px]">
          <div className="p-5 text-2xl text-center min-w-[200px] font-semibold	bg-[#abc756] text-white rounded-lg truncate	">
            ${getMoney() || 0}
          </div>
          <div className="text-lg">
            Income type: {data?.incomeType}
            <Dropdown
              startingType={timeType}
              onSelect={(type) => setTimeType(type)}
            />
          </div>
        </div>
        <Table
          moneyNet={data?.moneyNet}
          moneyGross={data?.moneyGross}
          tax={data?.tax}
        />
      </div>
    </div>
  );
};

export default Income;
