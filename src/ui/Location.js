import { TextFactory } from './elementFactories';

const Location = ({
  parent,
  city,
  country,
  countryCode,
  placeholder = false,
}) => {
  const name = (placeholder) ? 'placeholderText' : 'location';

  const style = (() => {
    if (placeholder) return 'text-lg text-left mx-8 animate-pulse max-w-max';
    return 'text-lg text-left mx-8';
  })();

  const text = (() => {
    if (placeholder) return 'Placeholder, Country';
    if (country.length > 15) return `${city}, ${countryCode || country}`;
    return `${city}, ${country}`;
  })();

  const location = TextFactory({
    parent,
    name,
    style,
    text,
    type: 'h2',
  });

  return location;
};

export default Location;
