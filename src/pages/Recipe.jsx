import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/recipe.css";
function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activetab, setActiveTab] = useState("Instructions");
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=72cec1a754e2421a96dd75b5eac9d579`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div className="mainRecipeDiv">
      <h2>{details.title}</h2>
      <div className="recipeSide">
        <div>
          <img className="recipeImg" src={details.image} alt="" />
        </div>
        <div>
          <button onClick={() => setActiveTab("Instructions")}>
            Instructions
          </button>
          <button onClick={() => setActiveTab("Ingredients")}>
            Ingredients
          </button>
          {activetab === "Instructions" && (
            <>
              <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
              <h3
                dangerouslySetInnerHTML={{ __html: details.instructions }}
              ></h3>
            </>
          )}
          {activetab === "Ingredients" && (
            <ul>
              {details.extendedIngredients.map((ingredients) => {
                return <li>{ingredients.original}</li>;
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Recipe;
