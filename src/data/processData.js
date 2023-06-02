import {
  getPopPercentage,
  toCelsius,
  toFahrenheit,
  capitalize,
  completeUVI,
  getDay,
  getReadableTimestamp,
  getWindDirection,
} from './processors';

const processData = (data) => {
  const current = {
    ...data.current,
    description: capitalize(data.current.description),
    temp: toCelsius(data.current.temp),
    feelsLike: toCelsius(data.current.feelsLike),
    pop: getPopPercentage(data.current.pop),
    windSpeed: `${Math.round(data.current.windSpeed * (18 / 5))} km/h`,
    windDeg: getWindDirection(data.current.windDeg),
    humidity: `${data.current.humidity}%`,
    uvi: completeUVI(data.current.uvi),
    visibility: `${Math.round(data.current.visibility / 1000)} km`,
    clouds: `${data.current.clouds}%`,
    sunrise: getReadableTimestamp(data.current.sunrise),
    sunset: getReadableTimestamp(data.current.sunset),
    country: data.current.country || null,
  };

  const getDaily = (unit) => data.daily
    .map((dailyData, index) => ({
      ...dailyData,
      dt: (() => {
        if (index === 0) return 'Today';
        if (index === 1) return 'Tomorrow';
        return getDay(dailyData.dt);
      })(),
      description: capitalize(dailyData.description),
      sunrise: getReadableTimestamp(dailyData.sunrise),
      sunset: getReadableTimestamp(dailyData.sunset),
      tempDay:
          unit === 'metric'
            ? toCelsius(dailyData.tempDay)
            : toFahrenheit(dailyData.tempDay),
      tempNight:
          unit === 'metric'
            ? toCelsius(dailyData.tempNight)
            : toFahrenheit(dailyData.tempNight),
      feelsLikeDay:
          unit === 'metric'
            ? toCelsius(dailyData.feelsLikeDay)
            : toFahrenheit(dailyData.feelsLikeDay),
      feelsLikeNight:
          unit === 'metric'
            ? toCelsius(dailyData.feelsLikeNight)
            : toFahrenheit(dailyData.feelsLikeNight),
      windSpeed:
          unit === 'metric'
            ? `${Math.round(dailyData.windSpeed * (18 / 5))} km/h`
            : `${Math.round(dailyData.windSpeed * 2.2369)} mph`,
      humidity: `${dailyData.humidity}%`,
      windDeg: getWindDirection(dailyData.windDeg),
      clouds: `${dailyData.clouds}%`,
      pop: getPopPercentage(dailyData.pop),
      uvi: completeUVI(dailyData.uvi),
    }));

  return {
    metric: {
      current,
      daily: getDaily('metric'),
    },
    imperial: {
      current: {
        ...current,
        temp: toFahrenheit(data.current.temp),
        feelsLike: toFahrenheit(data.current.temp),
        windSpeed: `${Math.round(data.current.windSpeed * 2.2369)} mph`,
        visibility: `${Math.round(
          (current.visibility / 1000) * 0.62137119,
        )} mi`,
      },
      daily: getDaily('imperial'),
    },
  };
};

export default processData;
