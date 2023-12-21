import React, { useState, useEffect } from 'react';
import Storage from './Storage';

const SearchHistory = ({ setSearch }) => {
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const storedMeals = Storage.getSearches();
    setSearchHistory(storedMeals);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedMeals = Storage.getSearches();
      setSearchHistory(storedMeals);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleHistoryClick = (item) => {
    setSearch(item); // Set search value
    searchMeal(item); // Search for the clicked item
  };

  const searchMeal = (searchTerm) => {
    // Search for the term
    const searchTermLower = searchTerm.toLowerCase().trim();
    // Perform the search based on the searchTerm...
  };

  const handleReload = () => {
    window.location.reload(); // Reload the page
  };

  const handleDeleteHistory = () => {
    Storage.clearSearches(); // Clear search history from localStorage
    setSearchHistory([]); // Clear the history displayed in the component
  };

  return (
    <div className="search-history">
      <h3>Search History</h3>
      <div className="white-box">
        {searchHistory.map((item, index) => (
          <div key={index} className="search-item" onClick={() => handleHistoryClick(item)}>
            {item}
          </div>
        ))}
      </div>
      <div className="history-buttons">
        <button className="his-but" onClick={handleReload}>Reload</button>
        <button className="his-but" onClick={handleDeleteHistory}>Delete</button>
      </div>
    </div>
  );
};

export default SearchHistory;
