const removeSelected = () => {
  const list = [...document.querySelector('[data-name="list"]').childNodes];
  list.forEach((li) => li.removeAttribute('data-selected', true));
};

export default removeSelected;
