const handleClickUnit = ({ toggler, variableUnits }) => {
  toggler.button.addEventListener('click', () => {
    const unit = toggler.button.getAttribute('data-activeunit');
    toggler.setText((unit === 'imperial') ? '°F' : '°C');

    const textArr = Array.from(document.querySelectorAll(
      '[data-name="dailyForecastSection"] > section p',
    ));

    const dataNames = [
      'dayTemp',
      'feelsLikeDay',
      'nightTemp',
      'feelsLikeNight',
      'Wind Speed',
    ];

    const sections = textArr.filter((elem) => dataNames.includes(
      elem.getAttribute('data-name'),
    ));

    console.log(sections);

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
