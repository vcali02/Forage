import React, {useState} from 'react'

//previous prop {addRecipe}
function RecipeForm() {

  const formTemplate = {
    label: "",
    healthLabels: {
      'Vegan' : false,
      'Vegetarian' : false,
      'Pescatarian' : false,
      'Gluten-Free' : false,
      'Dairy-Free' : false,
      'Alcohol-Free' : false,
                  },
    ingredientLines: "",
    recipe: "",
    image: "",
    mealType: ""
  }

  const [form, setForm] = useState(formTemplate)



  function handleChange(e){
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  function handleCheckbox(e){
    // console.log(e.target.name)
    // console.log(form.healthLabels[e.target.name])
    // console.log(e.target.checked)
    setForm({
      ...form,
      healthLabels: {
        ...form.healthLabels,
        [e.target.name] : e.target.checked
      }
    })
  }


  function handleSubmit(e){
    e.preventDefault()
    let healthLabelArray = []
    for (const key in form.healthLabels){if(form.healthLabels[key]){healthLabelArray.push(key)}}
    console.log(healthLabelArray)

    let ingredientArray = form.ingredientLines.split(" ")
    
    
    fetch("http://localhost:3000/myRecipes", {
      method: 'POST',
      headers: {
        "content-type" : "application/json"},
      body: JSON.stringify({recipe:{...form, healthLabels: healthLabelArray, ingredientLines: ingredientArray}})
    })
    .then(res => res.json())
    .then(data => {
    //   addRecipe(data)
       setForm(formTemplate)
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
       
       <div>
       {/*dietary checkbox*/}
       <label className="new-recipe-form-checkbox-label">
       <input 
      checked= {form.healthLabels["Vegan"]}
       type="checkbox" 
       name="Vegan"  
       placeholder="Health Label" 
       onChange={(e) => handleCheckbox(e)}
       className="new-recipe-form-checkbox"
       />
       Vegan</label>
        {/*dietary checkbox*/}
        <label className="new-recipe-form-checkbox-label">
        <input 
       checked= {form.healthLabels["Vegetarian"]} 
       type="checkbox" 
       name="Vegetarian"  
       placeholder="Health Label" 
       onChange={(e) => handleCheckbox(e)}
       className="new-recipe-form-checkbox"
       />
       Vegetarian</label>
        {/*dietary checkbox*/}
        <label className="new-recipe-form-checkbox-label">
        <input 
       checked= {form.healthLabels["Pescatarian"]} 
       type="checkbox" 
       name="Pescatarian"  
       placeholder="Health Label" 
       onChange={(e) => handleCheckbox(e)}
       className="new-recipe-form-checkbox"
       />
       Pescatarian</label>
        {/*dietary checkbox*/}
        <label className="new-recipe-form-checkbox-label">
        <input 
       checked= {form.healthLabels["Gluten-Free"]} 
       type="checkbox" 
       name="Gluten-Free"  
       placeholder="Health Label" 
       onChange={(e) => handleCheckbox(e)}
       className="new-recipe-form-checkbox"
       />
       Gluten-Free</label>
        {/*dietary checkbox*/}
        <label className="new-recipe-form-checkbox-label">
        <input 
       checked= {form.healthLabels["Dairy-Free"]} 
       type="checkbox" 
       name="Dairy-Free"  
       placeholder="Health Label" 
       onChange={(e) => handleCheckbox(e)}
       className="new-recipe-form-checkbox"
       />
       Dairy-Free</label>
        {/*dietary checkbox*/}
        <label className="new-recipe-form-checkbox-label">
        <input 
       checked= {form.healthLabels["Alcohol-Free"]} 
       type="checkbox" 
       name="Alcohol-Free"  
       placeholder="Health Label" 
       onChange={(e) => handleCheckbox(e)}
       className="new-recipe-form-checkbox"
       />
       Alcohol-Free</label>
       </div>
       <input 
       value= {form.image} 
       type="text" 
       name="image" 
       placeholder="Image URL" 
       onChange={(e) => handleChange(e)}
       className="new-recipe-form-input"
       />
       <input 
       value= {form.ingredientLines} 
       type="text" 
       name="ingredientLines"  
       placeholder="Ingredients" 
       onChange={(e) => handleChange(e)}
       className="new-recipe-form-input-ingredients"
       />
        <button type="submit" name="submit" className="new-recipe-form-button">Add Recipe</button>
     </form>
   </div>
  )
}

export default RecipeForm