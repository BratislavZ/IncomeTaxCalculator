import React from 'react';

const Table = ({ moneyNet, moneyGross, tax }) => {
  return (
    <table className="table-fixed mx-auto	 text-center shadow-3xl rounded-lg overflow-hidden  w-[100%] ">
      <thead>
        <tr className=" bg-sky-600 text-white	text-xl 		">
          <th className="px-[10px] py-[5px] w-[25%]  border-r-[2px] border-white font-light	">
            Frequency
          </th>
          <th className="px-[10px] py-[5px] w-[25%] border-r-[2px] border-white font-light	">
            Gross Income
          </th>
          <th className="px-[10px] py-[5px] w-[25%]  border-r-[2px] border-white font-light	">
            Tax
          </th>
          <th className="px-[10px] py-[5px] w-[25%]  font-light	">Net Income</th>
        </tr>
      </thead>
      <tbody className="text-lg	">
        <tr className="border-b-[2px] border-white bg-neutral-100	">
          <td className="border-r-[2px] border-white px-[10px] py-[3px] truncate">
            Weekly
          </td>
          <td className="border-r-[2px] border-white px-[10px] py-[3px] truncate">
            ${moneyGross?.weekly || 0}
          </td>
          <td className="border-r-[2px] border-white px-[10px] py-[3px] truncate">
            ${tax?.weekly || 0}
          </td>
          <td className="px-[10px] py-[3px] truncate">
            ${moneyNet?.weekly || 0}
          </td>
        </tr>
        <tr className="border-b-[2px] border-white bg-sky-100	">
          <td className="border-r-[2px] border-white px-[10px] py-[3px] truncate">
            Fortnightly
          </td>
          <td className="border-r-[2px] border-white px-[10px] py-[3px] truncate">
            ${moneyGross?.fortnightly || 0}
          </td>
          <td className="border-r-[2px] border-white px-[10px] py-[3px] truncate">
            ${tax?.fortnightly || 0}
          </td>
          <td className=" px-[10px] py-[3px] truncate">
            ${moneyNet?.fortnightly || 0}
          </td>
        </tr>
        <tr className="border-b-[2px] border-white bg-neutral-100	">
          <td className="border-r-[2px] border-white px-[10px] py-[3px] truncate">
            Monthly
          </td>
          <td className="border-r-[2px] border-white px-[10px] py-[3px] truncate">
            ${moneyGross?.monthly || 0}
          </td>
          <td className="border-r-[2px] border-white px-[10px] py-[3px] truncate">
            ${tax?.monthly || 0}
          </td>
          <td className=" px-[10px] py-[3px] truncate">
            ${moneyNet?.monthly || 0}
          </td>
        </tr>
        <tr className="bg-sky-100	">
          <td className=" border-r-[2px] border-white px-[10px] py-[3px] truncate">
            Annually
          </td>
          <td className="border-r-[2px] border-white px-[10px] py-[3px] truncate">
            ${moneyGross?.annualy || 0}
          </td>
          <td className="border-r-[2px] border-white px-[10px] py-[3px] truncate">
            ${tax?.annualy || 0}
          </td>
          <td className=" px-[10px] py-[3px] truncate">
            ${moneyNet?.annualy || 0}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
