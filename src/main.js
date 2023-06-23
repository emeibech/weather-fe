import './style.css';
// import fetchClientCity from './data/fetchClientCity';
// import fetchWeatherOC from './data/fetchWeatherOC';
import filterData from './data/filterData';
import processData from './data/processData';
import testData from './data/testData';
import Header from './ui/Header';
import Location from './ui/Location';
import CurrentWeather from './ui/CurrentWeather';
import DailyForecast from './ui/DailyForecast';
import FullInfoArray from './ui/FullInfoArray';
import handleClickDaily from './events/handleClickDaily';
import handleClickUnit from './events/handleClickUnit';
import handleFocusSearch from './events/handleFocusSearch';
import handleClickClear from './events/handleClickClear';
import handleUserInput from './events/handleUserInput';
import CitiesDropdown from './ui/CitiesDropdown';
import handleBlurSearch from './events/handleBlurSearch';
import Placeholder from './controller/Placeholder';

// const initialLoad = async () => {
//   const ipInfo = await fetchClientCity();
//   const onecallData = await fetchWeatherOC({
//     lat: ipInfo.lat,
//     lon: ipInfo.lon,
//   });

//   const filteredOC = filterData(onecallData);
//   const processedData = processData(filteredOC);
//   return processedData;
// };

document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');

  // Process test data
  const data = processData(filterData(testData));
  // console.table(data.metric.daily[0]);

  // Render header
  const header = Header(app);

  // Render main element
  const main = (() => {
    const mainElement = document.createElement('main');
    mainElement.setAttribute('data-name', 'main');
    mainElement.className = 'px-2';

    app.appendChild(mainElement);

    const removeElement = () => mainElement.removeChild(mainElement);

    const fade = () => {
      mainElement.removeAttribute('data-visible', 'true');
      mainElement.setAttribute('data-visible', 'false');
      setTimeout(() => {
        mainElement.removeAttribute('data-visible', 'false');
        mainElement.setAttribute('data-visible', 'true');
      }, 50);
    };

    return {
      mainElement,
      removeElement,
      fade,
    };
  })();

  const placeholder = (() => {
    const skeleton = Placeholder(main.mainElement);
    main.fade();
    return skeleton;
  })();

  setTimeout(() => {
    placeholder.removeFromDom();

    const location = Location({
      parent: main.mainElement,
      city: 'Tokyo',
      country: 'Japan',
    });

    const current = CurrentWeather({
      parent: main.mainElement,
      metric: data.metric.current,
      imperial: data.imperial.current,
    });

    const daily = DailyForecast({
      parent: main.mainElement,
      metric: data.metric.daily,
      imperial: data.imperial.daily,
    });

    main.fade();

    const fullInfoArr = FullInfoArray({
      dailyArr: daily.dailyArr,
      metric: data.metric.daily,
      imperial: data.imperial.daily,
    });

    const citiesDropdown = CitiesDropdown(header.rightHeader.div);

    /* ****************************Event Handlers**************************** */
    // handle click events on daily forecast
    const fullInfoVariableUnits = fullInfoArr.reduce(
      (accumulator, currentVal) => [...accumulator, ...currentVal.variableUnits],
      [],
    );

    handleClickDaily({
      dailyArr: daily.dailyArr,
      fullInfoArr,
    });

    // handle click event on unit toggler
    const dailyVariableUnits = daily.dailyArr.reduce(
      (accumulator, currentVal) => {
        const newVal = [currentVal.dayTemp, currentVal.nightTemp];
        return [...accumulator, ...newVal];
      },
      [],
    );

    handleClickUnit({
      toggler: header.UnitToggler,
      variableUnits: [
        ...current.variableUnits,
        ...dailyVariableUnits,
        ...fullInfoVariableUnits,
      ],
    });

    handleFocusSearch({
      search: header.searchBar,
      dropdown: citiesDropdown,
    });

    handleBlurSearch({
      search: header.searchBar,
      dropdown: citiesDropdown,
    });

    handleClickClear({
      search: header.searchBar,
      dropdown: citiesDropdown,
    });

    handleUserInput({
      search: header.searchBar,
      dropdown: citiesDropdown,
    });
  }, 2000);

  // console.log(placeholder);

  // Instantiate and render location
  // const location = Location({
  //   parent: main.mainElement,
  //   city: 'Tokyo',
  //   country: 'Japan',
  // });

  // // Instantiate and render current weather
  // const current = CurrentWeather({
  //   parent: main.mainElement,
  //   metric: data.metric.current,
  //   imperial: data.imperial.current,
  // });

  // // Instantiate and render daily forecast
  // const daily = DailyForecast({
  //   parent: main.mainElement,
  //   metric: data.metric.daily,
  //   imperial: data.imperial.daily,
  // });

  // const fullInfoArr = FullInfoArray({
  //   dailyArr: daily.dailyArr,
  //   metric: data.metric.daily,
  //   imperial: data.imperial.daily,
  // });

  // const citiesDropdown = CitiesDropdown(header.rightHeader.div);

  // /* ****************************Event Handlers**************************** */
  // // handle click events on daily forecast
  // const fullInfoVariableUnits = fullInfoArr.reduce(
  //   (accumulator, currentVal) => [...accumulator, ...currentVal.variableUnits],
  //   [],
  // );

  // handleClickDaily({
  //   dailyArr: daily.dailyArr,
  //   fullInfoArr,
  // });

  // // handle click event on unit toggler
  // const dailyVariableUnits = daily.dailyArr.reduce(
  //   (accumulator, currentVal) => {
  //     const newVal = [currentVal.dayTemp, currentVal.nightTemp];
  //     return [...accumulator, ...newVal];
  //   },
  //   [],
  // );

  // handleClickUnit({
  //   toggler: header.UnitToggler,
  //   variableUnits: [
  //     ...current.variableUnits,
  //     ...dailyVariableUnits,
  //     ...fullInfoVariableUnits,
  //   ],
  // });

  // handleFocusSearch({
  //   search: header.searchBar,
  //   dropdown: citiesDropdown,
  // });

  // handleBlurSearch({
  //   search: header.searchBar,
  //   dropdown: citiesDropdown,
  // });

  // handleClickClear({
  //   search: header.searchBar,
  //   dropdown: citiesDropdown,
  // });

  // handleUserInput({
  //   search: header.searchBar,
  //   dropdown: citiesDropdown,
  // });
});
