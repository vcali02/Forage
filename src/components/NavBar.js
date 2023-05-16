import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav className="nav-bar">
        <NavLink className="nav-links" exact to ="/home" >Home</NavLink>
        <NavLink className="nav-links" to="/about" >About</NavLink>
        <NavLink className="nav-links" to="/new" >Add a Recipe</NavLink>
        <NavLink className="nav-links" to="/myrecipes">My Recipes</NavLink>
    </nav>
  )
}

export default NavBar