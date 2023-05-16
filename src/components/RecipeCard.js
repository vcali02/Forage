import React, {useState} from 'react'

function RecipeCard({recipe}) {
  //flip state
  const [isFlipped, setFlip] = useState(false)


  //click event for card flip
  function handleClick(e){
    setFlip(!isFlipped)
  }

    let healthLabelString = recipe.recipe.healthLabels.join(', ')
    let ingredientString = recipe.recipe.ingredientLines.join(', ')

  return (
    
    <li className="card" onClick={(e) => handleClick(e)}>
      {
        isFlipped ?
        (<>
        <h4 className="recipe-title" >{recipe.recipe.label}</h4>
          <p>Ingredients: {ingredientString}</p>
          <br></br>
          <p>Health Labels: {healthLabelString}</p>
        </>)
        :
        (<>
          <h4 className="recipe-title" >{recipe.recipe.label}</h4>
          <img className="recipe-image" src={recipe.recipe.images.SMALL.url} alt={recipe.recipe.label} />
        </>)
      }
      
  </li>
  )
}


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