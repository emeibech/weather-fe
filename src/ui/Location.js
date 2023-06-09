import { TextFactory } from './elementFactories';

const Location = ({ isLoading, parent }) => TextFactory({
  isLoading,
  parent,
  name: 'location',
  text: 'Osaka, Japan',
  type: 'h2',
  style: 'text-lg text-left pl-8',
});

export default Location;
