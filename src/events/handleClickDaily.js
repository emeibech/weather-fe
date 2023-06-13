import expand from './expand';

const handleClickDaily = (daily) => {
  const dailyArr = Object.entries(daily).filter(
    (obj) => obj[0] !== 'dailyForecastSection' && obj[0] !== 'daily',
  );

  expand(dailyArr);
};

export default handleClickDaily;
