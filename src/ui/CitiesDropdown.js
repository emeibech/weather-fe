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

  const errorMessage = (() => {
    const button = document.createElement('button');
    button.setAttribute('data-name', 'errorMessage');
    button.className = 'hidden p-2 rounded min-w-full';

    dropdown.div.appendChild(button);

    const setErrorMsg = (error) => {
      button.textContent = error;
    };

    const showError = () => button.classList.remove('hidden');
    const hideError = () => button.classList.add('hidden');

    return {
      button,
      setErrorMsg,
      showError,
      hideError,
    };
  })();

  const hideDropdown = () => dropdown.div.classList.add('hidden');
  const showDropdown = () => dropdown.div.classList.remove('hidden');

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

  const showList = () => {
    listItems.forEach((item) => {
      item.showListItem();
    });
  };

  const displayError = (invalid) => {
    emptyList();
    if (invalid.length > 1) {
      errorMessage.setErrorMsg(`Remove invalid characters: ${invalid}`);
      errorMessage.showError();
    } else {
      errorMessage.setErrorMsg(`Remove invalid character: ${invalid}`);
      errorMessage.showError();
    }
  };

  const hideError = () => errorMessage.hideError();

  return {
    dropdown,
    list,
    listItems,
    errorMessage,
    showDropdown,
    hideDropdown,
    addToList,
    emptyList,
    showList,
    displayError,
    hideError,
  };
};

export default CitiesDropdown;
