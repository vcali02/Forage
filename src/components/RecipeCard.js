import React, {useState} from 'react'

function RecipeCard({recipe}) {
  //flip state
  const [isFlipped, setFlip] = useState(false)
  //2. favorite/unfavorite state
  const [isFavorite, setFavorite] = useState(false)



  //2. click event to toggle between favorite and unfavorite
  function handleFavoriteClick(e){
  //UPDATE state to reflect the opposite of its current state
  setFavorite(!isFavorite)
  }



  //click event for card flip
  function handleClick(e){
    setFlip(!isFlipped)
  }

    let healthLabelString = recipe.recipe.healthLabels.join(', ')
    let ingredientString = recipe.recipe.ingredientLines.join(', ')

  return (
    
    <ul className="card" >
       <li>
        {/*ternary to toggle favorite/unfavorite*/}
       {isFavorite ? (
          <button 
          className="emoji-button favorite active" 
          onClick={(e) => handleFavoriteClick(e)}>★</button>
        ) : (
          <button 
          className="emoji-button favorite" 
          onClick={(e) => handleFavoriteClick(e)}>☆</button>
        )}
        </li>
        <li onClick={(e) => handleClick(e)}>
        {
        isFlipped ?
        (<>
        <h4 className="recipe-title-side-2" >{recipe.recipe.label}</h4>
          <p>Ingredients: {ingredientString}</p>
          <br></br>
          <p>Health Labels: {healthLabelString}</p>
        </>)
        :
        (<>
          <h4 className="recipe-title-side-1" >{recipe.recipe.label}</h4>
          <img className="recipe-image" src={recipe.recipe.images.SMALL.url} alt={recipe.recipe.label} />
        </>)
      }
      </li>
  </ul>
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