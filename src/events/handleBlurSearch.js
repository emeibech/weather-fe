import onecall from '../controller/onecall';
import getCountryCode from '../controller/getCountryCode';

const handleBlurSearch = ({ search, dropdown }) => {
  const input = search.searchInput;

  input.addEventListener('blur', (e) => {
    const target = e.explicitOriginalTarget;

    if (target.nodeName === 'LI') {
      [input.value] = target.textContent.split(',');

      onecall({
        lat: target.getAttribute('data-lat'),
        lon: target.getAttribute('data-lon'),
        city: target.textContent.split(',')[0],
        country: target.textContent.split(', ')[1],
        countryCode: getCountryCode(target.textContent.split(', ')[1]),
      });

      input.value = '';
    }

    if (target.nodeName === '#text') {
      if (target.parentElement.nodeName === 'LI') {
        const li = target.parentElement;
        [input.value] = li.textContent.split(',');

        onecall({
          lat: li.getAttribute('data-lat'),
          lon: li.getAttribute('data-lon'),
          city: li.textContent.split(',')[0],
          country: li.textContent.split(', ')[1],
          countryCode: getCountryCode(li.textContent.split(', ')[1]),
        });

        input.value = '';
      }
    }

    dropdown.hideDropdown();
  });
};

export default handleBlurSearch;
