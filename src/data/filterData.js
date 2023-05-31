const filterData = (data) => {
  const daily = data.daily.map((dailyData) => ({
    dt: dailyData.dt,
    description: dailyData.weather[0].description,
    icon: dailyData.weather[0].icon,
    sunrise: dailyData.sunrise,
    sunset: dailyData.sunset,
    summary: dailyData.summary,
    tempDay: dailyData.temp.day,
    tempNight: dailyData.temp.night,
    feelsLikeDay: dailyData.feels_like.day,
    feelsLikeNight: dailyData.feels_like.night,
    humidity: dailyData.humidity,
    windSpeed: dailyData.wind_speed,
    windDeg: dailyData.wind_deg,
    clouds: dailyData.clouds,
    pop: dailyData.pop,
    uvi: dailyData.uvi,
  }));

  const current = {
    description: data.current.weather[0].description,
    icon: data.current.weather[0].icon,
    temp: data.current.temp,
    feelsLike: data.current.feels_like,
    pop: data.hourly.pop,
    windSpeed: data.current.wind_speed,
    windDeg: data.current.wind_deg,
    humidity: data.current.humidity,
    uvi: data.current.uvi,
    visibility: data.current.visibility,
    clouds: data.current.clouds,
    sunrise: data.current.sunrise,
    sunset: data.current.sunset,
    country: (data.sys) ? data.sys.country : null,
  };

  return { current, daily };
};

export default filterData;
