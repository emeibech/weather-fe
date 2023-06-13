import { DivFactory, TextFactory } from './elementFactories';

const MoreInfo = ({
  isLoading,
  parent,
  property,
  value,
}) => {
  const container = DivFactory({
    isLoading,
    parent,
    name: 'infoContainer',
    style: 'flex flex-row justify-between border-b py-1',
  });

  const propertyText = TextFactory({
    isLoading,
    parent: container.div,
    name: 'property',
    text: property,
    type: 'p',
    style: 'opacity-75',
  });

  const valueText = TextFactory({
    isLoading,
    parent: container.div,
    name: 'value',
    text: value,
    type: 'p',
    style: 'opacity-75',
  });

  return {
    propertyText,
    valueText,
  };
};

export default MoreInfo;
