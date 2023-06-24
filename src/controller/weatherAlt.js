import Weather from './Weather';
import fetchWeatherAlt from '../data/fetchWeatherAlt';
import filterData from '../data/filterData';
import processData from '../data/processData';
import Placeholder from './Placeholder';
import countries from '../data/countries.json';

const weatherAlt = async (city) => {
  const unit = document.querySelector('[data-activeunit]')
    .getAttribute('data-activeunit');

  const placeholder = Placeholder();
  const onecallData = await fetchWeatherAlt(city);
  const filteredOC = filterData(onecallData);
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
