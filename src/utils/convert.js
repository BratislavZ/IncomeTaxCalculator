export const removeCommas = (value) => {
  return value.replaceAll(',', '');
};

export const formatIncomeToMoney = (value) => {
  return value
    .toString()
    .replace(/[^\d]/g, '')
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
