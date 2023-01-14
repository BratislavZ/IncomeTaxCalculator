import React from 'react';
import useDropdown from '../hooks/useDropdown';

const timeOptions = {
  weekly: 'weekly',
  fortnightly: 'fortnightly',
  monthly: 'monthly',
  yearly: 'annualy',
};

const Dropdown = ({ onSelect, startingType }) => {
  const { timeType, isDropdownShown, setIsDropdownShown, selectHandler } =
    useDropdown(onSelect, startingType);

  return (
    <div>
      <div
        className="relative mt-1"
        tabIndex={-1}
        onBlur={() => setIsDropdownShown(false)}
      >
        <div
          className="relative w-[125px] cursor-pointer rounded-md bg-amber-400 py-2 text-left text-[18px]  active:translate-y-[-3px] "
          onClick={() => setIsDropdownShown((prev) => !prev)}
        >
          <span className="flex items-center">
            <span className="ml-2">{timeType}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            {arrowDownIcon}
          </span>
        </div>

        <ul
          className="absolute hidden right-0 z-10 mt-1 max-h-56 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          style={{ display: isDropdownShown ? 'block' : 'none' }}
        >
          <li
            className="text-gray-900 hover:bg-gray-200 relative cursor-pointer  py-2 pl-3 pr-9"
            onClick={() => selectHandler(timeOptions.weekly)}
          >
            <div className="flex items-center">
              <span className="font-normal ml-3 block">weekly</span>
            </div>
          </li>
          <li
            className="text-gray-900 hover:bg-gray-200 relative cursor-pointer  select-none py-2 pl-3 pr-9"
            onClick={() => selectHandler(timeOptions.fortnightly)}
          >
            <div className="flex items-center">
              <span className="font-normal ml-3 block ">fortnightly</span>
            </div>
          </li>
          <li
            className="text-gray-900 hover:bg-gray-200 relative cursor-pointer  select-none py-2 pl-3 pr-9"
            onClick={() => selectHandler(timeOptions.monthly)}
          >
            <div className="flex items-center">
              <span className="font-normal ml-3 block ">monthly</span>
            </div>
          </li>
          <li
            className="text-gray-900 hover:bg-gray-200 relative cursor-pointer  select-none py-2 pl-3 pr-9"
            onClick={() => selectHandler(timeOptions.yearly)}
            name="yearly"
          >
            <div className="flex items-center">
              <span className="font-normal ml-3 block">annualy</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;

const arrowDownIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill=" rgb(100 116 139)"
    height="18px"
    width="18px"
    version="1.1"
    id="Layer_1"
    viewBox="0 0 407.437 407.437"
  >
    <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 " />
  </svg>
);
