import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
    <div>
      <h2>{details.title}</h2>
      <img src={details.image} alt="" />
      <button onClick={() => setActiveTab("Instructions")}>Instructions</button>
      <button onClick={() => setActiveTab("Ingredients")}>Ingredients</button>
      {activetab === "Instructions" && (
        <>
          <h3>{details.summary}</h3>
          <h3>{details.instructions}</h3>
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
  );
}

export default Recipe;
