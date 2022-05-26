import Link from 'next/link'
import styles from '../styles/Home.module.css'
import idConverter from '../utils/idConverter'
export default function PokeCard({pokemon}) {
    return (
        <Link href={`/pokemon/${pokemon.id}`}>
            <div className={styles.card}>
                <div className={styles.cardImage} style={{backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png)`}}>
                </div>
                <div className={styles.cardInfo}>
                    <h3 className={styles.cardID}>#{idConverter(pokemon.id)}</h3>
                    <h3 className={styles.cardText}>{pokemon.name}</h3>
                </div>
            </div>
        </Link>
    )
}