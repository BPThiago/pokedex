import styles from '../../styles/Pokedescription.module.css';
import idConverter from '../../utils/idConverter';
import { wrongNames, correctNames } from '../../utils/changeNames';
export const getStaticPaths = async () => {
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=649`)
    const pokemons = await response.json()

    const paths = pokemons.results.map((pokemon, index) => {
        return {
            params: {
                pokemonid: (index + 1).toString(),
            }
        }
    })


    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
        
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.params.pokemonid}`)
    const pokemon = await response.json()
    
    if (wrongNames.includes(pokemon.name)) {
        pokemon.name = correctNames[wrongNames.indexOf(pokemon.name)]
      }

    return {
        props: {
            pokemon,
        }
    }

}

export default function Pokemon({ pokemon }) {
    const scaleConverter = (scale) => {
        return (scale / 10).toFixed(1)
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.pokeInfo}>
                <div className={styles.pokemon}>
                    <h3>#{idConverter(pokemon.id)}</h3>
                    <div className={styles.pokemonImage} style={{backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png)`}}></div>
                </div>
                <div className={styles.name}>
                    <h1>{pokemon.name}</h1>
                </div>
                <div className={styles.detailsContainer}>
                    <div className={styles.topic}>
                        <h2>Pokémon Details:</h2>
                    </div>
                    <div className={styles.data}>
                        <div>
                            <h4>ID:</h4>
                            <p>{pokemon.id}</p>
                        </div>
                        <div>
                            <h4>Type:</h4>
                            {pokemon.types.map((value) => (
                                <span key={value.type.name} className={`${styles.type} ${styles[value.type.name + 'Type']}`}>{value.type.name}</span>
                            ))}
                        </div>
                        <div>
                            <h4>Height:</h4>
                        <p>{scaleConverter(pokemon.height)}m</p>
                        </div>
                        <div>
                            <h4>Weight:</h4>
                        <p>{scaleConverter(pokemon.weight)}kg</p>
                        </div>
                    </div>

                    <div className={styles.topic}>
                        <h2>Pokémon Stats:</h2>
                    </div>
                    <div className={styles.stats}>
                        {pokemon.stats.map(
                                element => (
                                <div key={element.stat.name} className={styles.statsElement}>
                                    <p>{element.stat.name.replace('-', ' ')}</p>
                                    <div className={styles.maxStat}>
                                        <span className={styles.pokemonStat} style={{width: `${element.base_stat*100/255}%`}}>
                                            <span className={styles.pokemonStatText}>{element.base_stat}</span>
                                        </span>
                                    </div>
                                </div>
                            )
                        )}
                    
                        
                    </div>
                </div>
            </div>
        </div>
    )
}