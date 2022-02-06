const getLastArrItemFixed = (arr) => {
  let lastItem = arr[arr.length - 1];
  return Number(lastItem.value);
};

const getFirstArrItemFixed = (arr) => {
  let lastItem = arr[0];
  return Number(lastItem.value);
};

const getLastArrItemNormal = (arr) => {
  let lastItem = arr[arr.length - 1];
  return Number(lastItem);
};

const getFirstArrItemNormal = (arr) => {
  let lastItem = arr[0];
  return Number(lastItem);
};

export {
  getLastArrItemFixed,
  getFirstArrItemFixed,
  getLastArrItemNormal,
  getFirstArrItemNormal,
};
