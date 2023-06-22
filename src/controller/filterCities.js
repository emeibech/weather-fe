import cities from '../data/cities.json';

const filterCities = (input) => cities.filter((info) => {
  // Get trimmed version of city names based on the length of user input
  const trimmedCityName = info.city.slice(0, input.length);
  // Capitalize the first letter of input in case it's in lowercase
  const capitalizedInput = input.charAt().toUpperCase() + input.slice(1);
  // Return true if they matched
  return trimmedCityName === capitalizedInput;
});

export default filterCities;
