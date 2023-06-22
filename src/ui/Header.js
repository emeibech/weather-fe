import SearchBar from './SearchBar';
import UnitTogglerBtn from './UnitTogglerBtn';
import { DivFactory } from './elementFactories';

const Header = ({ isFahrenheit, parent }) => {
  const headerContainer = document.createElement('header');
  headerContainer.className = 'p-2 sticky';
  headerContainer.setAttribute('data-name', 'header');

  const div = document.createElement('div');
  div.classList.add(
    'px-1',
    'rounded-full',
    'bg-fuchsia-700',
    'h-8',
    'w-8',
    'cursor-pointer',
  );

  const h1 = document.createElement('h1');
  h1.textContent = 'W!';
  h1.classList.add(
    'text-4xl',
    'font-black',
    'text-white',
    'leading-none',
  );

  div.appendChild(h1);
  headerContainer.appendChild(div);
  parent.appendChild(headerContainer);

  const rightHeader = DivFactory({
    parent: headerContainer,
    name: 'rightHeader',
    style: 'grid',
  });

  // Instantiate Search bar
  const searchBar = SearchBar(rightHeader.div);

  // Instantiate unitTogglerBtn
  const UnitToggler = UnitTogglerBtn({
    isFahrenheit,
    parent: rightHeader.div,
  });

  return {
    headerContainer,
    rightHeader,
    UnitToggler,
    searchBar,
  };
};

export default Header;
