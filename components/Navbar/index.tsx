import Link from "next/link"
import styles from "./styles.module.scss"

const Navbar: React.FC = () => {
    return (
        <>
            <div className={styles.navbar}>
                <nav>
                    <Link href={"/"} scroll>Accueil</Link>
                    <Link href={"/"} scroll>Accueil</Link>
                    <Link href={"/"} scroll>Accueil</Link>
                    <Link href={"/"} scroll>Accueil</Link>
                    <Link href={"/"} scroll>Accueil</Link>
                </nav>
            </div>
        </>
    )
}

export default Navbar