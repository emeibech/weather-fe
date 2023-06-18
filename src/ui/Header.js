import UnitTogglerBtn from './UnitTogglerBtn';

const Header = ({ isFahrenheit, parent }) => {
  const headerContainer = document.createElement('header');
  headerContainer.className = 'px-4 py-2 sticky';
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

  // Render unitTogglerBtn
  const UnitToggler = UnitTogglerBtn({
    isFahrenheit,
    parent: headerContainer,
  });

  return {
    headerContainer,
    UnitToggler,
  };
};

export default Header;
