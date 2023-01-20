import React from "react"
import {Link} from "react-router-dom"

export default function Meni(){

    return(
    <div class="nav-header">
        <Link to="/"><p class="link">Home</p></Link> 
        <Link to="/About"><p>About</p></Link>
    </div>)
}