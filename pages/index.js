import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import PokeCard from '../components/PokeCard'
import { wrongNames, correctNames } from '../utils/changeNames'
export async function getStaticProps() {

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=649`)
  const pokemons = await response.json()

  pokemons.results.forEach((pokemon, index) => {
    pokemon.id = index + 1
    if (wrongNames.includes(pokemon.name)) {
      pokemon.name = correctNames[wrongNames.indexOf(pokemon.name)]
    }
  })

  return {
    props: {
      pokemons,
    }
  }
}

export default function Home({ pokemons }) {
  const [input, setInput] = useState("")
  const [filteredPokemons, setFilteredPokemons] = useState([])

  useEffect(() => {
    if (!input) {
      setFilteredPokemons(pokemons.results)
      return
    }
    setFilteredPokemons(pokemons.results.filter( pokemon => (
      pokemon.name.toLowerCase().includes(input.toLowerCase())
    )))
  }, 
  [input, pokemons.results]
  )

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input type="text" value={input} onChange={(t) => setInput(t.target.value)} placeholder="Search for a Pokémon" />
      </div>

      <div className={styles.pokeContainer}>
      {
        filteredPokemons.map(pokemon => (
          <PokeCard pokemon={pokemon} key={pokemon.id} />
          )
        )
      }
      </div>
    </div>
  )
}
