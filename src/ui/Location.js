import { TextFactory } from './elementFactories';

const Location = ({ isLoading, parent }) => TextFactory({
  isLoading,
  parent,
  name: 'location',
  text: 'Tokyo, Japan',
  type: 'h2',
  style: 'text-lg text-left px-8',
});

export default Location;
