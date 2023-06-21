const UnitTogglerBtn = ({ isFahrenheit, parent }) => {
  const button = document.createElement('button');
  button.textContent = (isFahrenheit) ? '°C' : '°F';
  button.className = 'text-xl rounded-full text-zinc-200';
  button.setAttribute('data-name', 'unittoggler');
  button.setAttribute(
    'data-activeunit',
    (isFahrenheit) ? 'imperial' : 'metric',
  );

  parent.appendChild(button);

  const removeElement = () => parent.removeChild(button);
  const render = () => parent.appendChild(button);
  const setText = (str) => {
    button.textContent = str;
  };

  return {
    isFahrenheit,
    button,
    removeElement,
    render,
    setText,
  };
};

export default UnitTogglerBtn;
