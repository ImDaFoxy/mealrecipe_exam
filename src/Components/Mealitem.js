import React, { useState } from "react";

const Mealitem = ({ getMeal }) => {
  const [showRecipe, setShowRecipe] = useState(false);

  const toggleRecipe = () => {
    setShowRecipe(!showRecipe);
  };

  if (!getMeal) {
    return null;
  }

  return (
    <>
      <div className="card" onClick={toggleRecipe}>
        <img
          src={getMeal.strMealThumb}
          alt={getMeal.strMeal}
          style={{ filter: showRecipe ? "brightness(0%)" : "brightness(100%)" }}
        ></img>
        <div className="info" style={{ display: showRecipe ? "none" : "block" }}>
          <h2 className="highlighted-text">{getMeal.strMeal}</h2>
        </div>
        {showRecipe && (
          <div className="recipe" style={{ color: "white" }}>
            <h4>Recipe:</h4>
            <p>{getMeal.strInstructions}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Mealitem;
