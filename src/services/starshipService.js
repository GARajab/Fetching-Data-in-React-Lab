const BASE_URL = "https://swapi.py4e.com/api/starships/"

export const fetchStarships = async () => {
  try {
    const response = await fetch(BASE_URL)
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    const data = await response.json()
    return data.results // Returns an array of starships
  } catch (error) {
    console.error("Failed to fetch starships:", error)
    return [] // returns an empty array on error
  }
}
