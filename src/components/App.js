import {useState, useEffect} from 'react';
import { Switch, Route} from "react-router-dom";
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import About from './About';
import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';
import NavBar from './NavBar';
import MyRecipes from './MyRecipes';



function App() {
  //STEP 1. GET state variables
  const [recipes, setRecipes] = useState([])
  //STEP 2. search state variables
  const [search, setSearch] = useState("")
  //STEP 3. show form variables
  const [showForm, setShowForm] = useState(false)
  


  //will live in Search component to ensure rendering occurs with CLICK
  //STEP 1. GET API data and transfer values to the recipe state variables
  // useEffect(() => {
  //   fetch("https://api.edamam.com/api/recipes/v2?type=public&app_id=1b69287b&app_key=3548c1c8ddcced686bdb0bea5fc04678&cuisineType=Asian")
  //   .then(resp => resp.json())
  //   .then(data => setRecipes(data.hits))
  // },[])

  // console.log(recipes.hits)


    // console.log(recipes)


//STEP 2. filter recipes
const filteredRecipes = [...recipes].filter((el) => {
  return el.recipe.label.toLowerCase().includes(search.toLowerCase()) 
})

//STEP
function changeRecipes(array){
  setRecipes(array)
}




  return (
    <div className="App" >
      {/**user routes**/}
      <header className="header"><h1>Forage</h1></header>  
      <NavBar/>
        <Switch>
          {/**user route to home**/}
          <Route path = "/home">
            <RecipeList recipes={recipes} search={search} setSearch={setSearch} changeRecipes={changeRecipes}/>
          </Route>
          {/**user route to recipe form**/}
          <Route path="/new">
            <RecipeForm />
          </Route>
          {/**user route to about page**/}
          <Route path="/about">
           <About className="header-buttons"/>
          </Route>
          {/**user route to my recipes**/}
          <Route path="/myrecipes">
            <MyRecipes />
          </Route>
          {/**user route to main/home**/}
          <Route path = "/">
            <RecipeList recipes={recipes} search={search} setSearch={setSearch} changeRecipes={changeRecipes}/>
          </Route>
        </Switch>
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"))

export default App;
