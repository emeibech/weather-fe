import cities from '../data/cities.json';
import { capitalize } from '../data/processors';

const filterCities = (input) => cities.filter((info) => {
  // Get trimmed version of city names based on the length of user input
  const trimmedCityName = info.city.slice(0, input.length);
  // Capitalize the first letter of each word in case it's lowercased
  const capitalizedInput = capitalize(input);
  // Return true if they matched
  return trimmedCityName === capitalizedInput;
});

export default filterCities;
