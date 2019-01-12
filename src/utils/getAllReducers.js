const getAllReducers = (pages = {}) => {
  let result = {};

  Object.keys(pages).forEach(pageName => {
    const page = pages[pageName];

    if (page.hasOwnProperty("reducer")) {
      result = { ...result, [pageName]: page.reducer };
    }
  });

  return result;
};

export default getAllReducers;
