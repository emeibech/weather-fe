const getPopPercentage = (num) => `${Math.round(num * 100)}%`;
const toCelsius = (K) => `${Math.round(K - 273.15)}°C`;
const toFahrenheit = (K) => `${Math.round(1.8 * (K - 273.15) + 32)}°F`;

const capitalize = (str) => str
  .split(' ')
  .map((word) => word.charAt().toUpperCase() + word.slice(1))
  .join(' ');

const completeUVI = (uvi) => {
  const roundedUvi = Math.round((uvi * 100) / 100);
  const uviScale = [
    'Low',
    'Low',
    'Low',
    'Moderate',
    'Moderate',
    'Moderate',
    'High',
    'High',
    'Very High',
    'Very High',
    'Very High',
  ];

  if (roundedUvi > 10) return `${roundedUvi} Extreme`;
  return `${roundedUvi} ${uviScale[roundedUvi]}`;
};

const getDay = (unix) => {
  const date = new Date(unix * 1000);
  const day = date.getDay();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return days[day];
};

const getReadableTimestamp = (unix) => {
  // Convert unix to milliseconds and get current date
  const date = new Date(unix * 1000);
  // Get the hour (in 24-hour format) and minutes
  let hours = date.getHours();
  let minutes = date.getMinutes();
  // Determine AM/PM
  const ampm = hours >= 12 ? 'PM' : 'AM';
  // Convert to 12-hour format
  hours %= 12;
  // Convert 0s to 12
  hours = hours || 12;
  // Add leading zeros if necessary
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  // Return the formatted time string
  return `${hours}:${minutes} ${ampm}`;
};

const getWindDirection = (windDeg) => {
  const directions = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
  ];

  const index = Math.round(windDeg / 22.5) % 16;
  return directions[index];
};

export {
  getPopPercentage,
  toCelsius,
  toFahrenheit,
  capitalize,
  completeUVI,
  getDay,
  getReadableTimestamp,
  getWindDirection,
};
