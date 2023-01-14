import { useEffect, useState } from 'react';

const useDropdown = (onSelect, startingType) => {
  const [timeType, setTimeType] = useState(startingType);
  const [isDropdownShown, setIsDropdownShown] = useState(false);

  useEffect(() => {
    setTimeType(startingType);
  }, [startingType]);

  const selectHandler = (type) => {
    setTimeType(type);
    onSelect(type);
    setIsDropdownShown((prev) => !prev);
  };

  return { timeType, isDropdownShown, setIsDropdownShown, selectHandler };
};

export default useDropdown;
