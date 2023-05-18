import React, {useState} from 'react'

function RecipeCard({recipe, parentFavorite}) {
  //flip state
  const [isFlipped, setFlip] = useState(false)
  //2. favorite/unfavorite state
  const [isFavorite, setFavorite] = useState(parentFavorite)


  function postRecipe(){
      fetch('http://localhost:3000/myRecipes', {
        method: 'POST',
        headers: {"content-type" : "application/json"},
        body: JSON.stringify(recipe)
      })
      .then(resp => resp.json())
      .then(resp => console.log(resp))
  }

  function deleteRecipe(){
       fetch(`http://localhost:3000/myRecipes/${recipe.id}`, {
         method: 'DELETE'
       })
  }
  

  //STEP 2. click event to toggle between favorite and unfavorite
  function handleFavoriteClick(e){
    //UPDATE state to reflect the opposite of its current state
    let tempFav = isFavorite;
    setFavorite(prev => !prev)
    //console.log(recipe)
    //if true, invoke post function, if false, invoke delete function
    //only activated with click(!)
    !tempFav ? postRecipe() : deleteRecipe()
    //don't want it outside bc would execute in an uncontrolled manner
    //click controls the activation 
     
  }
//sideeffect use effect with isfavorite as dependency line 34 as callback in useeffect




  //click event for card flip
  function handleClick(e){
    setFlip(!isFlipped)
  }



    //STEP 3. FORM: conditional to differentiate b/t API and local host
    let healthLabelString = recipe.recipe.healthLabels.join(', ')
    let ingredientString = recipe.recipe.ingredientLines.join(', ')
    
    

    let recipeImage = ""
    recipe.recipe.images === undefined ? recipeImage = recipe.recipe.image : recipeImage = recipe.recipe.images.SMALL.url

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
        {/*ternary to toggle front/back card*/}
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
          <img className="recipe-image" src={recipeImage} alt={recipe.recipe.label} />
        </>)
      }
      </li>
  </ul>
  )
}


export default RecipeCard

