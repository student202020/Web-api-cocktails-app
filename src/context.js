import React, {useState, useEffect, useContext} from "react"
import Loading from "./Loading"

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext();
const AppProvider = ({children}) => {

  const [niz, setNiz] = React.useState([])
  const [pocetni, setPocetni] = React.useState([])
  const [unos, setUnos] = React.useState("")
  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(true)


  async function fetchPocetni(){
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    setPocetni(data.drinks)
    const allCategories = ['All', ...new Set(data.drinks.map((item) => item.strCategory))];
    setCategories(allCategories)
    setLoading(false)
  }
  
  async function fetchData(){
    setLoading(true)
    const response = await fetch(`${url}${unos}`)
    const data = await response.json()
    if(data.drinks){
        setNiz(data.drinks)
        setLoading(false)
    }
    else {alert("Ne postoji zadana pretraga. Vracamo Vas na puni prikaz!")
         setUnos("")}
  }
  React.useEffect(() => {fetchData()}, [unos])
  React.useEffect(() => {fetchPocetni()}, [])
 
  
  const handleIzbor = (e) => {
    e.preventDefault();
    if(e.target.value === "All"){setNiz(pocetni)}
    else {
        const noviNiz = pocetni.filter(item => item.strCategory === e.target.value)
    setNiz(noviNiz)
    }
  }

  if(loading) {return <Loading />}

  return(<AppContext.Provider value={{

    niz, unos, setUnos, handleIzbor, pocetni, categories

    }}>{children}</AppContext.Provider>)
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}