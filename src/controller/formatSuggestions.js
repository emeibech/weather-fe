const formatSuggestions = (city) => city.slice(0, 10)
  .map((info) => ({
    string: `${info.city}, ${info.country}`,
    lat: info.lat,
    lon: info.lon,
  }));

export default formatSuggestions;
