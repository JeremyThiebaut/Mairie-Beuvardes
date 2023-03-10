import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.scss";

const BackToTopButton: React.FC = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.backToTopButton}>
      {backToTopButton && (
        <span className={styles.backToTopButton} onClick={scrollUp}>
          <FontAwesomeIcon
            className={styles.backToTopButton__icone}
            icon={faAngleUp}
            aria-hidden="true"
          />
        </span>
      )}
    </div>
  );
};

export default BackToTopButton;