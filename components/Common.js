import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
export default function Common({children}) {
    return (
        <>
        <Head>
            <title>Pokédex</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="A simple next.js pokedex from PokéApi data." />
            <meta
                name="keywords"
                content="pokedex, pokemon, next.js, react, api, pokeapi, javascript"
            />


        </Head>
        <div className={styles.initialContainer}>
        
            <header className={styles.navBar}>
                <Link href={'/'}>
                    <div className={styles.logo}>

                    </div>
                </Link>
                <Link href={'/'}>
                    <p className={styles.redirectHome}>Home</p>
                </Link>
            </header>
            {children}
        </div>
        </>
    )
}
