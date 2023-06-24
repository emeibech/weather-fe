import Location from '../ui/Location';
import CurrentWeather from '../ui/CurrentWeather';
import DailyForecast from '../ui/DailyForecast';
import { MainFactory } from '../ui/elementFactories';

const Placeholder = () => {
  const app = document.querySelector('#app');
  const prevMain = document.querySelector('[data-name="main"]');
  if (prevMain) app.removeChild(prevMain);

  const main = MainFactory().mainElement;

  const location = Location({
    parent: main,
    placeholder: true,
  });

  const current = CurrentWeather({
    parent: main,
    placeholder: true,
  });

  const daily = DailyForecast({
    parent: main,
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
