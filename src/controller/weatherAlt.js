import Weather from './Weather';
import fetchWeatherAlt from '../data/fetchWeatherAlt';
import filterData from '../data/filterData';
import processData from '../data/processData';
import Placeholder from '../ui/Placeholder';
import countries from '../data/countries.json';
import FetchError from '../ui/FetchError';

const weatherAlt = async (city) => {
  const unit = document.querySelector('[data-activeunit]')
    .getAttribute('data-activeunit');

  const placeholder = Placeholder();
  const weatherData = await fetchWeatherAlt(city);

  if (weatherData.error) {
    FetchError(weatherData.error);
    return;
  }

  const filteredOC = filterData(weatherData);
  const processedData = processData(filteredOC);
  const countryCode = processedData.metric.current.country;

  placeholder.removeFromDom();

  Weather({
    city,
    countryCode,
    country: countries[countryCode] || countryCode,
    isFahrenheit: (unit === 'imperial'),
    data: processedData,
  });
};

export default weatherAlt;
