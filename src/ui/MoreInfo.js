import { DivFactory, TextFactory } from './elementFactories';

const MoreInfo = ({
  parent,
  property,
  value,
  imperial = false,
}) => {
  const container = DivFactory({
    parent,
    name: 'infoContainer',
    style: 'flex flex-row justify-between border-b py-1',
  });

  const propertyText = TextFactory({
    parent: container.div,
    name: 'property',
    text: property,
    type: 'p',
    style: 'text-zinc-400',
  });

  const valueText = TextFactory({
    parent: container.div,
    name: property,
    text: value,
    type: 'p',
    style: 'text-zinc-400',
    imperial,
    // style: 'text-zinc-400 bg-zinc-400 rounded-full',
  });

  return {
    propertyText,
    valueText,
  };
};

export default MoreInfo;
