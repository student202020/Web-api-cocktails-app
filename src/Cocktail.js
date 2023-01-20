import React from "react"
import {Link, useParams} from "react-router-dom"
import { useGlobalContext } from "./context";


export default function Cocktail(){
   const {niz} = useGlobalContext()
   const{id} = useParams();
   const temporary = niz.find(item => item.idDrink === id)
    return(
        <div class="title">
            <img src={temporary.strDrinkThumb} />
            <p>{temporary.strCategory}</p>
            <p>Alcoholic: {temporary.strAlcoholic}</p>
            <p>Instructions: {temporary.strInstructions}</p>
            <Link to="/"><p>go back...</p></Link>
         </div>)
}