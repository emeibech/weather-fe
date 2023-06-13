import { SectionFactory, TextFactory } from './elementFactories';
import DailySummary from './DailySummary';

const DailyForecast = ({ isLoading, parent }) => {
  const dailyForecastSection = SectionFactory({
    parent,
    isLoading,
    name: 'dailyForecastSection',
    style: 'flex flex-col place-items-center',
  });

  const daily = TextFactory({
    isLoading,
    parent: dailyForecastSection.section,
    name: 'daily',
    text: 'Daily',
    type: 'h2',
    style: 'text-2xl py-4',
  });

  const today = DailySummary({
    isLoading,
    parent: dailyForecastSection.section,
    day: 'Today',
    icon: '10d',
    tempDay: '31°C',
    tempNight: '27°C',
  });

  const tomorrow = DailySummary({
    isLoading,
    parent: dailyForecastSection.section,
    day: 'Tomorrow',
    icon: '10d',
    tempDay: '28°C',
    tempNight: '26°C',
  });

  const monday = DailySummary({
    isLoading,
    parent: dailyForecastSection.section,
    day: 'Monday',
    icon: '11d',
    tempDay: '28°C',
    tempNight: '27°C',
  });

  const tuesday = DailySummary({
    isLoading,
    parent: dailyForecastSection.section,
    day: 'Tuesday',
    icon: '10d',
    tempDay: '31°C',
    tempNight: '27°C',
  });

  const wednesday = DailySummary({
    isLoading,
    parent: dailyForecastSection.section,
    day: 'Wednesday',
    icon: '10d',
    tempDay: '31°C',
    tempNight: '27°C',
  });

  const thursday = DailySummary({
    isLoading,
    parent: dailyForecastSection.section,
    day: 'Thursday',
    icon: '09d',
    tempDay: '30°C',
    tempNight: '27°C',
  });

  const friday = DailySummary({
    isLoading,
    parent: dailyForecastSection.section,
    day: 'Friday',
    icon: '02d',
    tempDay: '31°C',
    tempNight: '27°C',
  });

  const saturday = DailySummary({
    isLoading,
    parent: dailyForecastSection.section,
    day: 'Saturday',
    icon: '01d',
    tempDay: '30°C',
    tempNight: '27°C',
  });

  return {
    dailyForecastSection,
    daily,
    today,
    tomorrow,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
  };
};

export default DailyForecast;
