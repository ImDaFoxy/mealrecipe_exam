const Storage = {
  saveSearch: (searchedMeal) => {
    let searchedMeals = JSON.parse(localStorage.getItem('searchedMeals')) || [];
    searchedMeals.push(searchedMeal);
    localStorage.setItem('searchedMeals', JSON.stringify(searchedMeals));
  },

  getSearches: () => {
    return JSON.parse(localStorage.getItem('searchedMeals')) || [];
  },

  clearSearches: () => {
    localStorage.removeItem('searchedMeals');
  },
};

export default Storage;
