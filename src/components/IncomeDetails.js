import React from 'react';
import useDetails from '../hooks/useDetails';
import { removeCommas } from '../utils/convert';
import Dropdown from './Dropdown';

const IncomeDetails = ({ onCalculate }) => {
  const {
    incomeType,
    totalIncome,
    timeType,
    inputChangeHandler,
    setIncomeType,
    setTimeType,
    calculateHandler,
  } = useDetails(onCalculate);

  const incomeStyle =
    'border border-[#abc756] rounded w-1/2	p-2  text-[20px] active:translate-y-[-3px] ';
  const selectedIncomeStyle = incomeStyle + 'bg-[#abc756] text-white';

  const grossStyle = () => {
    let style = incomeStyle;
    if (incomeType.gross) {
      style = selectedIncomeStyle;
    }
    return style;
  };
  const netStyle = () => {
    let style = incomeStyle;
    if (incomeType.net) {
      style = selectedIncomeStyle;
    }
    return style;
  };

  const btnCalculateStyle = () => {
    let style = 'rounded text-white font-light	p-2 text-[24px] ';
    const incomeNumber = removeCommas(totalIncome);
    if (
      (incomeType.gross || incomeType.net) &&
      totalIncome &&
      incomeNumber >= 0
    ) {
      return (style += 'bg-sky-600 cursor-pointer active:translate-y-[-3px] ');
    }
    return (style += 'bg-gray-300	 border border-slate-400 cursor-not-allowed	');
  };

  return (
    <div className="shadow-card flex max-w-[800px] w-[100%] min-h-[450px] bg-[rgb(253,251,251)] rounded-lg ">
      <div className="w-1/2 flex items-center justify-center	">{dollarIcon}</div>
      <div className="w-1/2 h-[100%] px-4 pb-4 bg-[rgb(237,237,237)]">
        <div className="text-[35px] text-center mb-4 mt-3 font-semibold">
          Income tax calculator
        </div>
        <form
          onSubmit={calculateHandler}
          className="flex flex-col justify-around h-[80%]"
        >
          <div className="flex flex-col relative">
            <span className="text-xl	mb-4">What is your total income?</span>
            <div className="absolute bottom-2 left-1">{moneyIcon}</div>
            <input
              className=" pl-11 pr-[135px]  border-solid border-[#5e5e5e]  border-b-2 outline-none bg-transparent text-[20px]"
              placeholder="e.g. 1,500"
              value={totalIncome}
              onChange={inputChangeHandler}
            />
            <div className="absolute bottom-0 right-0 py-1">
              <Dropdown
                onSelect={(type) => setTimeType(type)}
                startingType={timeType}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl">Please choose the income type:</span>
            <div className="flex gap-2">
              <button
                type="button"
                className={grossStyle()}
                onClick={() => setIncomeType({ gross: true, net: false })}
              >
                Gross Income
              </button>
              <button
                type="button"
                className={netStyle()}
                onClick={() => setIncomeType({ gross: false, net: true })}
              >
                Net Income
              </button>
            </div>
          </div>
          <button type="submit" className={btnCalculateStyle()}>
            Calculate
          </button>
        </form>
      </div>
    </div>
  );
};

export default IncomeDetails;

const moneyIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#abc756"
    height="20px"
    width="20px"
    version="1.1"
    id="Capa_1"
    viewBox="0 0 459.568 459.568"
  >
    <g>
      <path d="M246.817,335.072v22.294c6.493-1.547,9.753-5.069,9.753-10.583C256.57,340.489,252.547,337.797,246.817,335.072z" />
      <path d="M214.638,278.05c0,5.329,2.549,8.266,7.179,10.798v-21.562C217.032,269.302,214.638,272.891,214.638,278.05z" />
      <path d="M338.492,240.601c-23.908-18.506-42.082-42.997-52.978-70.59c9.327-1.696,16.404-9.844,16.404-19.66   c0-11.046-8.954-20-20-20h-6.649c-0.002-0.014-0.003-0.029-0.005-0.043c10.651-0.447,19.154-9.197,19.154-19.957   c0-10.213-7.659-18.621-17.544-19.834c2.814-11.83,7.72-23.151,14.61-33.38l19.381-28.771c3.759-5.58,4.132-12.777,0.972-18.716   C308.676,3.711,302.497,0,295.77,0H163.799c-6.727,0-12.906,3.711-16.066,9.65c-3.16,5.939-2.786,13.137,0.972,18.716   l19.381,28.771c6.89,10.229,11.796,21.549,14.61,33.38c-9.885,1.213-17.544,9.622-17.544,19.834   c0,10.76,8.504,19.511,19.154,19.957c-0.002,0.014-0.003,0.028-0.005,0.043h-6.649c-11.046,0-20,8.954-20,20   c0,9.819,7.081,17.968,16.411,19.661c-10.89,27.592-29.06,52.068-52.986,70.589c-33.52,25.947-54.626,63.707-54.626,105.745   c0,35.448,15.012,67.851,39.818,92.695c13.122,13.143,30.933,20.528,49.505,20.528h148.031c18.577,0,36.393-7.39,49.516-20.539   c24.794-24.844,39.797-57.243,39.797-92.684C393.118,304.307,372.012,266.547,338.492,240.601z M246.817,389.698v14.246   c0,6.904-5.596,12.5-12.5,12.5s-12.5-5.596-12.5-12.5v-14.77c-11.288-1.477-22.959-4.491-33.823-9.161   c-4.434-1.906-7.882-5.559-9.535-10.093c-1.653-4.534-1.372-9.558,0.799-13.869l0.02-0.039c3.95-7.846,13.421-11.105,21.367-7.362   c6.454,3.04,14.213,5.987,21.173,7.653V326.74c-25.719-7.501-43.706-16.848-43.706-43.07c0-23.728,14.366-43.537,43.706-48.711   v-9.781c0-6.904,5.596-12.5,12.5-12.5s12.5,5.596,12.5,12.5v9.526c9.152,1.259,18.407,4.132,27.216,7.889   c4.251,1.813,7.546,5.325,9.091,9.681c1.545,4.356,1.207,9.169-0.956,13.254l-0.023,0.044c-3.89,7.348-12.801,10.386-20.377,6.964   c-4.67-2.11-10.007-4.136-14.951-5.411v29.722l0.026,0.007c28.259,7.766,47.767,17.032,47.767,46.47   C294.611,372.013,275.029,387.041,246.817,389.698z" />
    </g>
  </svg>
);

const dollarIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    enableBackground="new 0 0 48 48"
    height="300px"
    width="300px"
    className="pt-4"
  >
    <path
      fill="#78909C"
      d="M40,41H8c-2.2,0-4-1.8-4-4l0-20.9c0-1.3,0.6-2.5,1.7-3.3L24,0l18.3,12.8c1.1,0.7,1.7,2,1.7,3.3V37 C44,39.2,42.2,41,40,41z"
    />
    <rect x="14" y="1" fill="#AED581" width="20" height="31" />
    <g fill="#558B2F">
      <path d="M13,0v33h22V0H13z M33,31H15V2h18V31z" />
      <path d="M34,3c0,1.7-0.3,3-2,3c-1.7,0-3-1.3-3-3s1.3-2,3-2C33.7,1,34,1.3,34,3z" />
      <path d="M16,1c1.7,0,3,0.3,3,2s-1.3,3-3,3s-2-1.3-2-3S14.3,1,16,1z" />
      <circle cx="24" cy="8" r="2" />
      <circle cx="24" cy="20" r="6" />
    </g>
    <path
      fill="#CFD8DC"
      d="M40,41H8c-2.2,0-4-1.8-4-4l0-20l20,13l20-13v20C44,39.2,42.2,41,40,41z"
    />
  </svg>
);
