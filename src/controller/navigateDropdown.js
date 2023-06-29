import removeSelected from './removeSelected';
import onecall from './onecall';
import getCountryCode from './getCountryCode';

const navigateDropdown = ({
  activeList, keyCode, search, dropdown,
}) => {
  const { searchInput: input, clearBtn: button } = search;
  const selected = document.querySelector('[data-selected=true]');
  const selectedIndex = activeList.findIndex((element) => element === selected);

  const move = (targetIndex) => {
    activeList[selectedIndex].removeAttribute('data-selected', true);

    /* This condition checks if the targetIndex param overshoots the range
      of available index in activeList. This allows users to loop through
      the suggestions when they successively press the up or down arrow key. */
    if (!activeList[targetIndex]) return;
    activeList[targetIndex].setAttribute('data-selected', true);
  };

  if (![38, 40].includes(keyCode)) {
    removeSelected();
  }

  if (keyCode === 40) {
    if (!selected) {
      activeList[0]?.setAttribute('data-selected', true);
    } else {
      move(selectedIndex + 1);
    }
  }

  if (keyCode === 38) {
    if (!selected) {
      activeList[activeList.length - 1]?.setAttribute('data-selected', true);
    } else {
      move(selectedIndex - 1);
    }
  }

  if (keyCode === 13 && selected) {
    const [city, country] = selected.textContent.split(', ');
    const lat = selected.getAttribute('data-lat');
    const lon = selected.getAttribute('data-lon');
    const countryCode = getCountryCode(country);

    onecall({
      lat, lon, city, country, countryCode,
    });

    removeSelected();
    dropdown.hideDropdown();
    input.blur();
    button.className = 'hidden';
    input.value = '';
  }
};

export default navigateDropdown;
