import './App.css';
import Registry from './components/Registry';
import Header from "./components/Header"
import React, { useEffect, useState } from "react"

function App() {
  const [planets, setPlanets] = useState([]);

  // console.log(planets)
  // console.log(search)

  useEffect(() => {
    fetch("http://localhost:8085/planets")
      .then(response => response.json())
      .then(setPlanets)
  }, [])



  return (
    <div className="app-container">
      <Header />
      <Registry planets={planets} setPlanets={setPlanets}/>
    </div>
  );
}

export default App;
