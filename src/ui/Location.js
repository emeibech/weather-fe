import { TextFactory } from './elementFactories';

const Location = ({
  parent,
  city,
  country,
}) => {
  const location = TextFactory({
    parent,
    name: 'location',
    text: `${city}, ${country}`,
    type: 'h2',
    style: 'text-lg text-left px-8',
  });

  return location;
};

export default Location;
