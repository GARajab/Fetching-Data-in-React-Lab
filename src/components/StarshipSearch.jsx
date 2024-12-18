/* eslint-disable no-unused-vars */
import React, { useState } from "react"

const StarshipSearch = ({ setSearchQuery }) => {
  const [query, setQuery] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    setSearchQuery(query)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search for a starship..."
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default StarshipSearch
