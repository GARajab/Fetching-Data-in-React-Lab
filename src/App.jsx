/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { fetchStarships } from "./services/starshipService"
import StarshipSearch from "./components/StarshipSearch"
import StarshipList from "./components/StarshipList"
import "../src/App.css"

const App = () => {
  const [starships, setStarships] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const loadStarships = async () => {
      const data = await fetchStarships()
      setStarships(data)
    }

    loadStarships()
  }, [])

  const filteredStarships = starships.filter((starship) =>
    starship.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <h1>Star Wars Starships</h1>
      <StarshipSearch setSearchQuery={setSearchQuery} />
      <StarshipList starships={filteredStarships} />
      <p>{filteredStarships.length} results found</p>
    </div>
  )
}

export default App
