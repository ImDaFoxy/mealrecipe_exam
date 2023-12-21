import React, { useState, useEffect } from 'react';
import Mealitem from './Mealitem';
import Storage from './Storage';
import SearchHistory from './SearchHistory';
import './style.css';

const Meal = ({ onSignOut }) => {
  const [search, setSearch] = useState('');
  const [myMeal, setMeal] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const updateSearchHistory = () => {
    const updatedSearches = Storage.getSearches();
    setSearchHistory(updatedSearches);
  };

  useEffect(() => {
    updateSearchHistory();
  }, [search]);

  const searchMeal = () => {
    const searchTerm = search.toLowerCase().trim();

    setLoading(true);

    // Save the exact search term
    Storage.saveSearch(searchTerm);

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setMeal(data.meals);

        const filteredMeals = data.meals
          ? data.meals.filter((meal) => meal.strMeal.toLowerCase() === searchTerm)
          : [];

        const mealNames = filteredMeals.map((meal) => meal.strMeal);
        mealNames.forEach((mealName) => Storage.saveSearch(mealName));

        setLoading(false);
        updateSearchHistory();
      })
      .catch((error) => {
        setLoading(false);
        console.error('Error fetching data:', error);
      });
  };

  const handleSignOut = () => {
    onSignOut();
  };

  return (
    <div className="main">
      <div className="heading">
        <h1>Search Your Food Recipe</h1>
        <h4>Client-side Front-end Web Development Final Project</h4>
        <h4>By: Brittanie, Melinda, Michelle</h4>
        <div className="signout-div">
          <button class="signOutButton" onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
      <div className="searchBox">
        <input
          type="search"
          className="search-bar"
          placeholder="Enter food name"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              searchMeal();
            }
          }}
        />
      </div>
      <SearchHistory setSearch={setSearch} searchHistory={searchHistory} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="container">
          {myMeal === null ? (
            <p>Not Found</p>
          ) : (
            myMeal.map((meal) => (
              <Mealitem key={meal.idMeal} getMeal={meal} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Meal;