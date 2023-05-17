import React from 'react'
import {useEffect, useState} from 'react'
import RecipeCard from './RecipeCard'
function MyRecipes() {

    const [myRecipes, setMyRecipes] = useState([])



    useEffect(() => {
        fetch("http://localhost:3000/myRecipes")
        .then(resp => resp.json())
        .then(data => setMyRecipes(data))
      },[])

  return (
    <div className="recipe-list">
        {
          [...myRecipes].map((recipe, index) => {
              return <RecipeCard key={index} recipe={recipe} parentFavorite={true} />
          })
        } 

    </div>
  )
}

export default MyRecipes