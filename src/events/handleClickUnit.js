const handleClickUnit = (variableUnits) => {
  const toggler = document.querySelector('[data-name="unittoggler"]');

  const toggle = () => {
    const unit = toggler.getAttribute('data-activeunit');
    toggler.textContent = (unit === 'imperial') ? '°F' : '°C';

    if (unit === 'metric') {
      toggler.removeAttribute('data-activeunit');
      toggler.setAttribute('data-activeunit', 'imperial');
      toggler.setAttribute('aria-pressed', 'true');
      variableUnits.forEach((element) => {
        element.changeToImperial();
      });
    } else {
      toggler.removeAttribute('data-activeunit');
      toggler.setAttribute('data-activeunit', 'metric');
      toggler.setAttribute('aria-pressed', 'false');
      variableUnits.forEach((element) => {
        element.changeToMetric();
      });
    }
  };

  toggler.addEventListener('click', toggle);
};

export default handleClickUnit;
