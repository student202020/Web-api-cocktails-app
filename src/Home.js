import React from "react"
import Loading from "./Loading"
import { useGlobalContext } from "./context"
import {Link} from "react-router-dom"

export default function Home(){
const {niz, unos, setUnos, handleIzbor, pocetni, loading, categories} = useGlobalContext();

if(loading){return <Loading />}
    return(
    <div>
    <div class="title"><h1>Kokteli u ponudi</h1></div>

    <nav>
    <label htmlFor="selekcija">Pretraga po vrsti</label>
    <select name="selekcija"
            id="selekcija"
            onClick={handleIzbor}
    >

        {categories.map(item => {
            return(<option value={item}>{item}</option>)
        })}
    </select>
   
    <br/>
    <label htmlFor="naziv">Pretraga po nazivu</label>
    <input type="text"
            placeholder="Search for coctail ..."
            id="naziv"
            name="unos"
            value={unos}
            onChange={e => {
                e.preventDefault();
                setUnos(e.target.value)}}
    />
    </nav>
    

    <div class="content">
    {niz.map(item => {
        return(
            <div>

               <Link to={`/cocktail/${item.idDrink}`}>
                <div>
                <img src={item.strDrinkThumb} />
                <p>{item.strCategory}</p>
                </div>
                </Link>
            </div>
        )
      })}
    </div>
    </div>)
}