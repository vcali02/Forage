import React, {useState} from 'react'

function RecipeForm({addRecipe}) {

  const formTemplate = {
    label: "",
    healthLabel: "",
    recipe: "",
    image: "",
  }

  const [form, setForm] = useState(formTemplate)



  function handleChange(e){
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }


  function handleSubmit(e){
    e.preventDefault()
    //console.log(form)
    fetch("http://localhost:3000/myRecipes", {
      method: 'POST',
      headers: {
        "content-type" : "application/json"},
      body: JSON.stringify(form)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    //   addRecipe(data)
    //   setForm(formTemplate)
    })
  }



  return (
     <div className="new-recipe-form" >
     <h2 className="new-recipe-title">New Recipe</h2>
     <form onSubmit={(e) => handleSubmit(e)}>
       
       <input 
       value= {form.label} 
       type="text" 
       name="label" 
       placeholder="Recipe name" 
       onChange={(e) => handleChange(e)}
       className="new-recipe-form-input"
       />
       <input 
       value= {form.healthLabel} 
       type="text" 
       name="healthLabel"  
       placeholder="Health Label" 
       onChange={(e) => handleChange(e)}
       className="new-recipe-form-input"
       />
       <input 
       value= {form.image} 
       type="text" 
       name="image" 
       placeholder="Image URL" 
       onChange={(e) => handleChange(e)}
       className="new-recipe-form-input"
       />
       <input 
       value= {form.recipe} 
       type="text" 
       name="recipe"  
       placeholder="Recipe" 
       onChange={(e) => handleChange(e)}
       className="new-recipe-form-input-ingredients"
       />
        <button type="submit" name="submit" className="new-recipe-form-button">Add Recipe</button>
     </form>
   </div>
  )
}

export default RecipeForm