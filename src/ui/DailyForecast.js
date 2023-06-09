import {
  DivFactory,
  TextFactory,
  ImgFactory,
  MoreInfoFactory,
  DailySummary,
} from './elementFactories';
import icons from '../assets/icons/icons';

const DailyForecast = ({ isLoading, parent }) => {
  const dailyForecastDiv = DivFactory({
    isLoading,
    parent,
    name: 'dailyForecastDiv',
    style: 'flex flex-col place-items-center',
  });

  const daily = TextFactory({
    isLoading,
    parent: dailyForecastDiv.div,
    name: 'daily',
    text: 'Daily',
    type: 'h2',
    style: 'text-2xl',
  });

  const daySummary = DailySummary({
    isLoading,
    parent: dailyForecastDiv.div,
    day: 'Today',
    icon: '10d',
    description: 'Heavy Intensity Rain',
    tempDay: 'Day: 28°C',
    tempNight: 'Night: 20°C',
    feelsLikeDay: 'Feels like: 36°C',
    feelsLikeNight: 'Feels like: 24°C',
  });

  return {
    dailyForecastDiv,
    daily,
    daySummary,
  };
};

export default DailyForecast;
