import { DivFactory, TextFactory } from './elementFactories';

const MoreInfo = ({
  parent,
  property,
  value,
  placeholder,
  imperial,
}) => {
  const container = DivFactory({
    parent,
    name: 'infoContainer',
    style: 'flex flex-row justify-between border-b py-1',
  });

  const propertyText = (() => {
    if (placeholder) {
      return TextFactory({
        parent: container.div,
        name: 'placeholderText',
        text: property,
        type: 'p',
        style: 'animate-pulse',
      });
    }

    return TextFactory({
      parent: container.div,
      name: 'property',
      text: property,
      type: 'p',
      style: 'text-zinc-400',
    });
  })();

  const valueText = (() => {
    if (placeholder) {
      return TextFactory({
        parent: container.div,
        name: 'placeholderText',
        text: value,
        type: 'p',
        style: 'w-auto animate-pulse',
      });
    }

    return TextFactory({
      parent: container.div,
      name: property,
      text: value,
      type: 'p',
      style: 'text-zinc-400',
      imperial,
    });
  })();

  return {
    propertyText,
    valueText,
  };
};

export default MoreInfo;
