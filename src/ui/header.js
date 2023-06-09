const header = () => {
  const parent = document.querySelector('#app');
  const headerContainer = document.createElement('header');
  headerContainer.classList.add('mt-6');

  const div = document.createElement('div');
  div.classList.add(
    'px-1',
    'rounded-full',
    'bg-fuchsia-700',
    'h-9',
    'w-9',
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
};

export default header;
