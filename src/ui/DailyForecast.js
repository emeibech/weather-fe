import { SectionFactory, TextFactory } from './elementFactories';
import DailySummary from './DailySummary';

const DailyForecast = ({
  parent,
  metric,
  imperial,
  placeholder = false,
}) => {
  const mainData = metric || [0, 1, 2, 3, 4, 5, 6, 7];

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

  const dailyArr = mainData.map((dailyData, index) => {
    const summary = DailySummary({
      parent: dailyForecastSection.section,
      day: dailyData.dt,
      icon: dailyData.icon,
      tempDay: dailyData.tempDay,
      tempNight: dailyData.tempNight,
      imperial: (placeholder) ? null : imperial[index],
      placeholder,
    });

    return summary;
  });

  const removeFromDom = () => parent.removeChild(dailyForecastSection.section);

  return {
    dailyForecastSection,
    dailyHeader,
    dailyArr,
    removeFromDom,
  };
};

export default DailyForecast;
