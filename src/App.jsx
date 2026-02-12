import { useState } from 'react'
import './App.css'
import movies from './data/Movies'

function App() {

  return (
    <div>
      <h1>BLOCKBUSTER</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.title}>{movie.title}-{movie.genre}
          </li>
        ))}

      </ul>


    </div>

  )
}

export default App
