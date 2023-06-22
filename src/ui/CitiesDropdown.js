import { DivFactory, ListItemFactory } from './elementFactories';

const CitiesDropdown = (parent) => {
  const dropdown = DivFactory({
    parent,
    name: 'dropdown',
    style: 'hidden cursor-pointer rounded mt-1',
  });

  const list = (() => {
    const ul = document.createElement('ul');
    ul.setAttribute('data-name', 'list');

    dropdown.div.appendChild(ul);

    return ul;
  })();

  const listItems = (() => {
    const array = [];

    for (let i = 0; i < 10; i += 1) {
      const listItem = ListItemFactory({
        parent: list,
        text: '',
        style: 'hidden p-2 rounded',
        name: 'listItem',
      });

      array.push(listItem);
    }

    return array;
  })();

  const showDropdown = () => dropdown.div.classList.remove('hidden');
  const hideDropdown = () => dropdown.div.classList.add('hidden');

  const addToList = (array) => {
    array.forEach((item, index) => {
      listItems[index].setText(item);
      listItems[index].showListItem();
    });
  };

  const emptyList = () => {
    listItems.forEach((item) => {
      item.setText('');
      item.hideListItem();
    });
  };

  return {
    dropdown,
    list,
    listItems,
    showDropdown,
    hideDropdown,
    addToList,
    emptyList,
  };
};

export default CitiesDropdown;
