import cities from '../data/cities.json';
import { capitalize } from '../data/processors';

const filterCities = (input) => cities.filter((info) => {
  const trimmedCityName = info.city.slice(0, input.length);
  const capitalizedInput = capitalize(input);
  return trimmedCityName === capitalizedInput;
});

export default filterCities;
