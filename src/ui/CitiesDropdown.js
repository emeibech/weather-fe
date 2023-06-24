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
      listItems[index].setText(item.string);
      listItems[index].li.setAttribute('data-lat', item.lat);
      listItems[index].li.setAttribute('data-lon', item.lon);
      listItems[index].showListItem();
    });
  };

  const emptyList = () => {
    listItems.forEach((item) => {
      item.setText('');
      item.hideListItem();
    });
  };

  const displayError = (invalid) => {
    emptyList();
    if (invalid.length > 1) {
      listItems[0].setText(`Remove invalid characters: ${invalid}`);
      listItems[0].showListItem();
    } else {
      listItems[0].setText(`Remove invalid character: ${invalid}`);
      listItems[0].showListItem();
    }
  };

  return {
    dropdown,
    list,
    listItems,
    showDropdown,
    hideDropdown,
    addToList,
    emptyList,
    displayError,
  };
};

export default CitiesDropdown;
