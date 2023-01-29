import Link from "next/link";
import styles from "./style.module.scss";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__hour}>
                <h3>Horaires</h3>
                <p>Du Lundi au vendredi</p>
                <p>De 9h00 à 12h00</p>
            </div>
            <div className={styles.footer__address}>
                <h3>Coordonnées</h3>
                <p>1 rue de fere</p>
                <p>02130 Beuvardes</p>
                <p>tel : <Link href="tel:+33 3 23 71 20 15">03 23 71 20 15</Link></p>
                <p>mail : <Link href="mailto:mairie.beuvardes@wanadoo.fr">mairie.beuvardes@wanadoo.fr</Link></p>
            </div>
            <div className={styles.footer__info}>
                <Link className={styles.footer__mention} href="">Mentions légales</Link>
                <Link className={styles.footer__newsletter} href="">Newsletter</Link>
            </div>
        </div>
    );
};

export default Footer;