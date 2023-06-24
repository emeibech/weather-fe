import Weather from '../controller/Weather';
import fetchWeatherOC from '../data/fetchWeatherOC';
import filterData from '../data/filterData';
import processData from '../data/processData';
import Placeholder from '../controller/Placeholder';

const handleClickDropdown = async ({
  lat,
  lon,
  city,
  country,
  countryCode,
}) => {
  const unit = document.querySelector('[data-activeunit]')
    .getAttribute('data-activeunit');

  const placeholder = Placeholder();
  const onecallData = await fetchWeatherOC({ lat, lon });
  const filteredOC = filterData(onecallData);
  const processedData = processData(filteredOC);

  placeholder.removeFromDom();

  Weather({
    city,
    country,
    countryCode,
    isFahrenheit: (unit === 'imperial'),
    data: processedData,
  });
};

export default handleClickDropdown;
