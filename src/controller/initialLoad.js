import Placeholder from '../ui/Placeholder';
import fetchClientLocation from '../data/fetchClientLocation';
import fetchWeatherOC from '../data/fetchWeatherOC';
import filterData from '../data/filterData';
import processData from '../data/processData';
import Weather from './Weather';
import FetchError from '../ui/FetchError';

const initialLoad = async (app) => {
  const placeholder = Placeholder();
  const ipInfo = await fetchClientLocation();

  if (ipInfo.error) {
    FetchError(ipInfo.error);
    return;
  }

  const country = ipInfo.country_name;
  const countryCode = ipInfo.country_code2;
  const lat = ipInfo.latitude;
  const lon = ipInfo.longitude;
  const { city } = ipInfo;
  const onecallData = await fetchWeatherOC({ lat, lon });

  if (onecallData.error) {
    FetchError(onecallData.error);
    return;
  }

  const filteredOC = filterData(onecallData);
  const processedData = processData(filteredOC);
  placeholder.removeFromDom();

  Weather({
    app,
    city,
    country,
    countryCode,
    data: processedData,
  });
};

export default initialLoad;
