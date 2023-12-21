import React from "react";

const Mealitem = ({ getMeal }) => {
    if (!getMeal) {
      return null;
    }

    return (
      <>
        <div className="card">
          <img src={getMeal.strMealThumb} alt={getMeal.strMeal}></img>
          <div className="info">
            <h2 className="highlighted-text">{getMeal.strMeal}</h2>
          </div>
          <div className="recipe">
            <h4>Recipe:</h4>
            <p>{getMeal.strInstructions}</p>
          </div>
        </div>
      </>
    );
  };

export default Mealitem;