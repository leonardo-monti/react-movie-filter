import { useState } from 'react'
import './App.css'
import movies from './data/Movies'

function App() {

  const [searchGenre, setSearchGenre] = useState("")

  return (
    <div>
      <h1>BLOCKBUSTER</h1>

      <ul>
        {movies.map((movie) => (
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
