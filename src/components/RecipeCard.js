import React from 'react'

function RecipeCard({recipe}) {
    //console.log(recipe)

    let healthLabelString = recipe.recipe.healthLabels.join()
    let ingredientString = recipe.recipe.ingredientLines.join()

  return (
    
    <li className="recipe-grid">
      <h4 className="recipe-title" >{recipe.recipe.label}</h4>
      <img className="recipe-image" src={recipe.recipe.images.THUMBNAIL.url} alt={recipe.recipe.label} />
      <p>Ingredients: {ingredientString}</p>
      <p>Health Labels: {healthLabelString}</p>
      <button className="primary" >RECIPE</button>
  </li>
  )
}

//Card styling
/*const styles = {
    pin: {
        margin: 0,
        padding: 0,
        borderRadius: '16px'
        backgroundColor: 'white'
        gridRowEnd: 'span 33'
    }
}*/

export default RecipeCard

//SIDE 1
//recipe name........ label
//recipe image..... images.THUMBNAIL.url
//recipe button 
//favorites icon

//SIDE 2
//ingredients
//health labels


//STEP 2 Conditionally Render image v. recipe