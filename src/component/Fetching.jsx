import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

export default function Fetching() {
  const [foodName, setFoodName] = useState("chicken");

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: 'meals',
    queryFn: () =>
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
        .then(res => res.json()),
    enabled: true // Enable the query initially
  });

  const changeFood = () => {
    refetch(); // Manually trigger the query to fetch data again
  }

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
        <button onClick={changeFood}>Filter</button>
      </div>

      <div className="card-container">
        {data && data.meals && data.meals.map((meal) => (
          <div key={meal.idMeal} className="card">
            <div className="card-content">
              <h1>{meal.strMeal}</h1>
              {meal.strMealThumb && <img src={meal.strMealThumb} alt={meal.strMeal} />}
              <h2>Category: {meal.strCategory}</h2>
              <p>{meal.strInstructions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
