import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./styles.module.scss";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [secondMenuOpen, setSecondMenuOpen] = useState(false);
  const [thirdMenuOpen, setThirdMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleLinkEnter = (link: string) => {
    if (activeLink !== link) {
      setActiveLink(link);
      setMenuOpen(true);
    }
  };

  const handleLinkLeave = (link: string) => {
    if (activeLink === link) {
      setActiveLink("");
      setMenuOpen(false);
      setSecondMenuOpen(false);
    }
  };

  return (
    <>
      <div className={styles.navbar}>
        <nav>
          <div
            className={router.asPath === "/" ? styles.active : ""}
            onMouseEnter={() => handleLinkEnter("/")}
            onMouseLeave={() => handleLinkLeave("/")}
          >
            <p>Accueil</p>
            <div
              className={`${
                menuOpen && activeLink === "/" ? styles.show : styles.hide
              }`}
              onMouseEnter={() => setSecondMenuOpen(true)}
              onMouseLeave={() => setSecondMenuOpen(false)}
            >
              <div
                className={
                  router.asPath === "/plusieurs" ? styles.active : styles.test
                }
                onMouseEnter={() => setThirdMenuOpen(true)}
                onMouseLeave={() => setThirdMenuOpen(false)}
              >
                <div>
                  <p>plusieurs</p>
                </div>
                <div className={`${secondMenuOpen ? "" : styles.hide}`}>
                  <Link
                    href={"/dernier"}
                    className={
                      router.asPath === "/dernier" ? styles.active : styles.test
                    }
                  >
                    dernier
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className={router.asPath === "/test" ? styles.active : ""}
            onMouseEnter={() => handleLinkEnter("/test")}
            onMouseLeave={() => handleLinkLeave("/test")}
          >
            <p>Test</p>
            <div
              className={`${
                menuOpen && activeLink === "/test" ? styles.show : styles.hide
              }`}
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}
            >
              <div
                className={router.asPath === "/plusieurs" ? styles.active : ""}
                onMouseEnter={() => setSecondMenuOpen(true)}
                onMouseLeave={() => setSecondMenuOpen(false)}
              >
                <p>autre</p>
                <div className={`${secondMenuOpen ? "" : styles.hide}`}>
                  <Link
                    href={"/dernier"}
                    className={
                      router.asPath === "/dernier" ? styles.active : ""
                    }
                  >
                    truc
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link
            href={"/autre"}
            className={router.asPath === "/autre" ? styles.active : ""}
          >
            autre
          </Link>
          <Link
            href={"/full"}
            className={router.asPath === "/full" ? styles.active : ""}
          >
            full
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
