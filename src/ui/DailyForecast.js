import { SectionFactory, TextFactory } from './elementFactories';
import DailySummary from './DailySummary';

const DailyForecast = ({ isLoading, parent, data }) => {
  const dailyForecastSection = SectionFactory({
    parent,
    isLoading,
    name: 'dailyForecastSection',
    style: 'flex flex-col place-items-center',
  });

  const dailyHeader = TextFactory({
    isLoading,
    parent: dailyForecastSection.section,
    name: 'dailyHeader',
    text: 'Daily',
    type: 'h2',
    style: 'text-2xl py-4',
  });

  const daily = data.map((dailyData) => {
    const summary = DailySummary({
      isLoading,
      parent: dailyForecastSection.section,
      day: dailyData.dt,
      icon: dailyData.icon,
      tempDay: dailyData.tempDay,
      tempNight: dailyData.tempNight,
    });

    return summary;
  });

  return {
    dailyForecastSection,
    dailyHeader,
    today: daily[0],
    tomorrow: daily[1],
    monday: daily[2],
    tuesday: daily[3],
    wednesday: daily[4],
    thursday: daily[5],
    friday: daily[6],
    saturday: daily[7],
  };
};

export default DailyForecast;
