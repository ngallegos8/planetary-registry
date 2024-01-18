import React, { useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry({ planets, setPlanets }) {
    const [search, setSearch] = useState("");

    // console.log(planets)
    // console.log(search)

    function handleNewPlanetFormSubmit(newPlanet) {
        setPlanets([...planets, newPlanet])
      }

    //   const displayedPlanets = planets.filter((planets) => planets.name.toLowerCase().includes(search.toLowerCase()))

    //    ALLOWS SEARCH FUNCTION TO SEARCH FOR ANYTHING IN THE PLANET OBJECT
      const displayedPlanets = planets.filter((planet) => {
        return planet.name.toLowerCase().includes(search.toLowerCase()) ||
        planet.climate.toLowerCase().includes(search.toLowerCase()) ||
        planet.terrain.toLowerCase().includes(search.toLowerCase()) ||
        planet.population.toString().includes(search)
      })

    return(
        <div className="registry">
            <Search search={search} setSearch={setSearch}/>
            <div className="content">
                <PlanetList planets={displayedPlanets}/>
                <NewPlanetForm onNewPlanetFormSubmit={handleNewPlanetFormSubmit}/>
            </div>
        </div>
    )
}

export default Registry;