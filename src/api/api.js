import axios from "axios";

const getNormal = async () => {
  return await axios.get(`https://demo1429763.mockable.io/normal`);
};

const getFixed = async () => {
  return await axios.get(`https://demo1429763.mockable.io/fixed`);
};

export { getNormal, getFixed };
