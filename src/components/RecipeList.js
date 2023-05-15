import React from 'react'
import RecipeCard from './RecipeCard'



const styles = {
    margin : 0,
    padding: 0,
    width: '80vw',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gridAutoRows: 'auto'
  
  }


//takes the array of recipes as a prop
function RecipeList({recipes}) {
  return (
    <div style={styles}>
       {
        [...recipes].map((recipe, index) => {
            return <RecipeCard key={index} recipe={recipe} />
        })
       } 
    </div>
  )
}




export default RecipeList


