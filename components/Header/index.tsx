import Image from "next/image"
import styles from "./style.module.scss"
import logo from "../../public/logo-beuvardes-bleu.png"
import Link from "next/link"

const Header: React.FC = () => {
    return (
        <>
            <div className={styles.header}>
                <Image className={styles.header__logo} src={logo} alt="Logo de beuvardes" width={300} height={300}></Image>
                <Link className={styles.header__title} href={"/"}>Commune de Beuvardes</Link>
            </div>
        </>
    )
}

export default Header