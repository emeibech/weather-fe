import Location from '../ui/Location';
import CurrentWeather from '../ui/CurrentWeather';
import DailyForecast from '../ui/DailyForecast';
import FullInfoArray from '../ui/FullInfoArray';
import handleClickDaily from '../events/handleClickDaily';
import handleClickUnit from '../events/handleClickUnit';
import UnitTogglerBtn from '../ui/UnitTogglerBtn';
import { capitalize } from '../data/processors';
import { MainFactory } from '../ui/elementFactories';

const Weather = ({
  data,
  city,
  country,
  countryCode,
  isFahrenheit,
  app = document.querySelector('#app'),
}) => {
  const prevMain = document.querySelector('[data-name="main"]');
  if (prevMain) app.removeChild(prevMain);

  const prevToggler = document.querySelector('[data-name="unittoggler"]');
  if (prevToggler) prevToggler.parentElement.removeChild(prevToggler);

  const main = MainFactory();

  Location({
    parent: main.mainElement,
    city: capitalize(city),
    country,
    countryCode,
  });

  const current = CurrentWeather({
    isFahrenheit,
    parent: main.mainElement,
    metric: data.metric.current,
    imperial: data.imperial.current,
  });

  const daily = DailyForecast({
    isFahrenheit,
    parent: main.mainElement,
    metric: data.metric.daily,
    imperial: data.imperial.daily,
  });

  UnitTogglerBtn(isFahrenheit);

  main.fadeIn();

  const fullInfoArr = FullInfoArray({
    isFahrenheit,
    dailyArr: daily.dailyArr,
    metric: data.metric.daily,
    imperial: data.imperial.daily,
  });

  /* **********Event Handlers********** */
  handleClickDaily({
    dailyArr: daily.dailyArr,
    fullInfoArr,
  });

  const fullInfoVariableUnits = fullInfoArr.reduce(
    (accumulator, currentVal) => [...accumulator, ...currentVal.variableUnits],
    [],
  );

  const dailyVariableUnits = daily.dailyArr.reduce(
    (accumulator, currentVal) => {
      const newVal = [currentVal.dayTemp, currentVal.nightTemp];
      return [...accumulator, ...newVal];
    },
    [],
  );

  handleClickUnit([
    ...current.variableUnits,
    ...dailyVariableUnits,
    ...fullInfoVariableUnits,
  ]);
};

export default Weather;
