import { SectionFactory, TextFactory } from './elementFactories';
import DailySummary from './DailySummary';

const DailyForecast = ({ parent, metric, imperial }) => {
  const dailyForecastSection = SectionFactory({
    parent,
    name: 'dailyForecastSection',
    style: 'flex flex-col place-items-center',
  });

  const dailyHeader = TextFactory({
    parent: dailyForecastSection.section,
    name: 'dailyHeader',
    text: 'Daily',
    type: 'h2',
    style: 'text-2xl py-4',
  });

  const dailyArr = metric.map((dailyData, index) => {
    const summary = DailySummary({
      parent: dailyForecastSection.section,
      day: dailyData.dt,
      icon: dailyData.icon,
      tempDay: dailyData.tempDay,
      tempNight: dailyData.tempNight,
      imperial: imperial[index],
    });

    return summary;
  });

  return {
    dailyForecastSection,
    dailyHeader,
    dailyArr,
  };
};

export default DailyForecast;
