import React from 'react'
import RecipeCard from './RecipeCard'



//takes the array of recipes as a prop
function RecipeList({recipes}) {
  return (
    <div className="recipe-list">
       {
        [...recipes].map((recipe, index) => {
            return <RecipeCard key={index} recipe={recipe} />
        })
       } 
    </div>
  )
}




export default RecipeList


