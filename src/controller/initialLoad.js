import Placeholder from './Placeholder';
import fetchClientLocation from '../data/fetchClientLocation';
import fetchWeatherOC from '../data/fetchWeatherOC';
import filterData from '../data/filterData';
import processData from '../data/processData';
import Weather from './Weather';

const initialLoad = async (app) => {
  const placeholder = Placeholder();

  const ipInfo = await fetchClientLocation();
  const country = ipInfo.country_name;
  const countryCode = ipInfo.country_code2;
  const lat = ipInfo.latitude;
  const lon = ipInfo.longitude;
  const { city } = ipInfo;

  const onecallData = await fetchWeatherOC({ lat, lon });
  const filteredOC = filterData(onecallData);
  const processedData = processData(filteredOC);

  placeholder.removeFromDom();

  const weather = Weather({
    app,
    city,
    country,
    countryCode,
    data: processedData,
  });

  return weather;
};

export default initialLoad;
