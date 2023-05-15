import {useState, useEffect} from 'react';
import logo from '../logo.svg';
// import '../App.css';
import Header from './Header'
import About from './About';
import RecipeForm from './RecipeForm';
import Search from './Search';
import RecipeList from './RecipeList';




function App() {
  //STEP 1. GET state variables
  const [recipes, setRecipes] = useState([])
  //search state variables
  const [search, setSearch] = useState("")




  //will live in Search component to ensure rendering occurs with CLICK
  //STEP 1. GET API data and transfer values to the recipe state variables
  // useEffect(() => {
  //   fetch("https://api.edamam.com/api/recipes/v2?type=public&app_id=1b69287b&app_key=3548c1c8ddcced686bdb0bea5fc04678&cuisineType=Asian")
  //   .then(resp => resp.json())
  //   .then(data => setRecipes(data.hits))
  // },[])

  // console.log(recipes.hits)

    useEffect(() => {
      fetch("http://localhost:3000/hits")
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



  return (
    <div className="App" >
      <Header/>
      <About/>
      <RecipeForm />
      <Search search={search} setSearch={setSearch} changeRecipes={changeRecipes}/>
      <RecipeList recipes={filteredRecipes}/>
    </div>
  );
}



export default App;
