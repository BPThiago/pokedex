import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function NavBar({children}) {
    return (
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
    )
}