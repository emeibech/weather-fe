import { SectionFactory, TextFactory } from './elementFactories';

const DailyFullInfo = ({
  parent,
  name,
  summary,
  nextElem,
}) => {
  const fullInfoSection = SectionFactory({
    parent,
    name,
    style: 'h-60 min-w-full border rounded p-4 cursor-pointer collapsed',
  });

  const testText = TextFactory({
    parent: fullInfoSection.section,
    name: 'testText',
    text: `Testing testing. Uh...${name}`,
    type: 'p',
    style: '',
  });

  const removeFromDom = () => parent.removeChild(fullInfoSection.section);
  const render = () => {
    parent.insertBefore(fullInfoSection.section, nextElem);
    // setTimeout is just to make this line async and trigger the animation
    setTimeout(() => {
      fullInfoSection.section.classList.add('expanded');
    }, 0);
  };

  removeFromDom();

  return {
    fullInfoSection,
    testText,
    summary,
    removeFromDom,
    render,
  };
};

export default DailyFullInfo;
