const collapse = (full) => {
  full.fullInfoSection.section.addEventListener('click', () => {
    full.summary.render(full.fullInfoSection.section.nextSibling);
    full.removeFromDom();
  });
};

export default collapse;
