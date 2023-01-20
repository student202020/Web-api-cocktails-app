
import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Home"
import Meni from "./Meni"
import About from "./About"
import Cocktail from "./Cocktail"

function App() {
  return (
    <Router>
     <Meni />
     <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/cocktail/:id" element={<Cocktail />}></Route>
    </Routes>
    </Router>
  );
}

export default App;
