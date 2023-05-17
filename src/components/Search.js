import {useState} from 'react'

function Search({search, setSearch, changeRecipes}) {

const [ApiSearch, setApiSearch] = useState("")

//controlled form
//1 form state
//2 connect value of input with form state
//3 onchange function
//4 onsubmit function that will send fetch request to API

function handleChange(e){
  setSearch(e.target.value)
}

function handleAPIChange(e){
    setApiSearch(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(ApiSearch)
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${ApiSearch}&app_id=1b69287b&app_key=3548c1c8ddcced686bdb0bea5fc04678`)
    .then(resp => resp.json())
    .then(data => changeRecipes(data.hits))
}
  
  return (
    <div className="search-box">
    <input 
    value={search}
    type="text" 
    placeholder="filter here"
    onChange={(e) => handleChange(e)} 
    className="search-input-filter"
    />

    <input 
    type="text" 
    onChange={(e)=>handleAPIChange(e)} 
    value={ApiSearch} 
    placeholder="search..."
    className="search-input"/>
    <button onClick={(e)=>handleSubmit(e)}
    className="search-button">Search</button>

  </div>
  )
}

export default Search