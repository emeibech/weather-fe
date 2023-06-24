const UnitTogglerBtn = (isFahrenheit) => {
  const parent = document.querySelector('[data-name="rightHeader"]');

  const button = document.createElement('button');
  button.textContent = (isFahrenheit) ? '°C' : '°F';
  button.className = 'text-xl rounded-full text-zinc-200';
  button.setAttribute('data-name', 'unittoggler');
  button.setAttribute(
    'data-activeunit',
    (isFahrenheit) ? 'imperial' : 'metric',
  );

  parent.insertBefore(button, parent.lastChild);

  return {
    isFahrenheit,
    button,
  };
};

export default UnitTogglerBtn;
