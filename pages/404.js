import styles from '../styles/404.module.css'
import Link from 'next/link'
export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.unown}>ERROR</h1>
            <h1 className={styles.text}>404</h1>
            <Link href='/'>
                <p className={styles.link}>
                    This page doesn't exist, so, please, visit our homepage clicking here.
                </p>
            </Link>
            
        </div>
    )
}