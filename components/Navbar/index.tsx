import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./styles.module.scss"

const Navbar: React.FC = () => {
    const router = useRouter()
    return (
        <>
            <div className={styles.navbar}>
                <nav>
                    <Link href={"/"} className={router.asPath === "/" ? styles.active : ""}>Accueil</Link>
                    <Link href={"/menu"} className={router.asPath === "/menu" ? styles.active : ""}>menu</Link>
                    <Link href={"/test"} className={router.asPath === "/test" ? styles.active : ""}>test</Link>
                    <Link href={"/autre"} className={router.asPath === "/autre" ? styles.active : ""}>autre</Link>
                    <Link href={"/full"} className={router.asPath === "/full" ? styles.active : ""}>full</Link>
                </nav>
            </div>
        </>
    )
}

export default Navbar