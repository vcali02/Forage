import {useState, useEffect} from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
// import '../App.css';
import About from './About';
import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';




function App() {
  //STEP 1. GET state variables
  const [recipes, setRecipes] = useState([])
  //STEP 2. search state variables
  const [search, setSearch] = useState("")
  //STEP 3. show form variables
  const [showForm, setShowForm] = useState(false)


//step 3. hiding and showing the form
function handleClick() {
  setShowForm((showForm) => !showForm);
}



  //will live in Search component to ensure rendering occurs with CLICK
  //STEP 1. GET API data and transfer values to the recipe state variables
  // useEffect(() => {
  //   fetch("https://api.edamam.com/api/recipes/v2?type=public&app_id=1b69287b&app_key=3548c1c8ddcced686bdb0bea5fc04678&cuisineType=Asian")
  //   .then(resp => resp.json())
  //   .then(data => setRecipes(data.hits))
  // },[])

  // console.log(recipes.hits)

    useEffect(() => {
      fetch("http://localhost:3000/myRecipes")
      .then(resp => resp.json())
      .then(data => setRecipes(data))
    },[])

    console.log(recipes)


//filter recipes
const filteredRecipes = [...recipes].filter((el) => {
  return el.recipe.label.toLowerCase().includes(search.toLowerCase()) 
})


// || el.recipe.healthLabels.toLowerCase().includes(search.toLowerCase())
// || el.recipe.ingredients.toLowerCase().includes(search.toLowerCase())
// console.log(recipes[0].recipe.label.toLowerCase())



function changeRecipes(array){
  setRecipes(array)
}


//STEP 3. adding recipes submitted in the form to the db.json
function addRecipe(recipe){
  setRecipes(
    [...recipes, recipe]
  )
} 



  return (
    <div className="App" >
      <header className="header"><h1>Forage</h1></header>
      <nav>
        <About/>
        {showForm ? <RecipeForm addRecipe={addRecipe}/> : null}</nav>
      <button onClick={handleClick} className="new-recipe-form-button">Add a Recipe</button>
      <RecipeList recipes={filteredRecipes} search={search} setSearch={setSearch} changeRecipes={changeRecipes}/>
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"))

export default App;
