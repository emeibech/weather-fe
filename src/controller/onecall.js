import Weather from './Weather';
import fetchWeatherOC from '../data/fetchWeatherOC';
import filterData from '../data/filterData';
import processData from '../data/processData';
import Placeholder from './Placeholder';
import FetchError from '../ui/FetchError';

const onecall = async ({
  lat,
  lon,
  city,
  country,
  countryCode,
}) => {
  const toggler = document.querySelector('[data-activeunit]');
  const unit = (toggler) ? toggler.getAttribute('data-activeunit') : 'metric';

  const placeholder = Placeholder();
  const onecallData = await fetchWeatherOC({ lat, lon });

  if (onecallData.error) {
    FetchError(onecallData.error);
    return;
  }

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

export default onecall;
