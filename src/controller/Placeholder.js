import Location from '../ui/Location';
import CurrentWeather from '../ui/CurrentWeather';
import DailyForecast from '../ui/DailyForecast';

const Placeholder = (parent) => {
  const location = Location({
    parent,
    placeholder: true,
  });

  const current = CurrentWeather({
    parent,
    placeholder: true,
  });

  const daily = DailyForecast({
    parent,
    placeholder: true,
  });

  const removeFromDom = () => {
    location.removeElement();
    current.removeFromDom();
    daily.removeFromDom();
  };

  return {
    location,
    current,
    daily,
    removeFromDom,
  };
};

export default Placeholder;
