const formatSuggestions = (city) => city.slice(0, 10)
  .map((info) => `${info.city}, ${info.country}`);

export default formatSuggestions;
