import { useState, useEffect } from 'react'
import './App.css'
import movies from './data/Movies'

function App() {

  const [searchGenre, setSearchGenre] = useState("")
  const [filteredMovies, setFilteredMovies] = useState(movies)

  useEffect(() => {
    if (searchGenre === "") {
      setFilteredMovies(movies)
    } else {
      const filtered = movies.filter(movie =>
        movie.genre.toLowerCase().includes(searchGenre.toLowerCase())
      )
      setFilteredMovies(filtered)
    }
  }, [searchGenre])

  return (
    <div>
      <h1>BLOCKBUSTER</h1>

      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.title}>
            {movie.title} - {movie.genre}
          </li>
        ))}
      </ul>

      <input type="text"
        placeholder="Scrivi un genere"
        value={searchGenre}
        onChange={(e) => setSearchGenre(e.target.value)}
      />

    </div>

  )
}

export default App
