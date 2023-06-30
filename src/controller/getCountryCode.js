/* eslint-disable no-unused-vars */
import countries from '../data/countries.json';

const getCountryCode = (country) => {
  const entries = Object.entries(countries);
  const matchingEntry = entries.find(([key, val]) => val === country);

  if (!matchingEntry) return null;
  return matchingEntry[0];
};

export default getCountryCode;
