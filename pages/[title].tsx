import styles from "../styles/Pages.module.scss";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

const Pages = () => {
  const router = useRouter();
  const path = router.asPath;
  const pathname = router.pathname;
  console.log(path);

  return (
    <>
      <div className={styles.pages}>
        <p>coucou</p>
        <p>Vous etes sur la page :</p>
        <p>{path}</p>
      </div>
      <Footer />
    </>
  );
};

export default Pages;
