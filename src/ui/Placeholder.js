import Location from './Location';
import CurrentWeather from './CurrentWeather';
import DailyForecast from './DailyForecast';
import { MainFactory } from './elementFactories';

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
