const handleClickUnit = ({ toggler, variableUnits }) => {
  toggler.button.addEventListener('click', () => {
    const unit = toggler.button.getAttribute('data-activeunit');
    toggler.setText((unit === 'imperial') ? '°F' : '°C');

    console.log(
      document.querySelectorAll('[data-name="dailyForecastSection"] > section'),
    );

    if (unit === 'metric') {
      toggler.button.removeAttribute('data-activeunit');
      toggler.button.setAttribute('data-activeunit', 'imperial');
      variableUnits.forEach((element) => {
        element.changeToImperial();
      });
    } else {
      toggler.button.removeAttribute('data-activeunit');
      toggler.button.setAttribute('data-activeunit', 'metric');
      variableUnits.forEach((element) => {
        element.changeToMetric();
      });
    }
  });
};

export default handleClickUnit;
