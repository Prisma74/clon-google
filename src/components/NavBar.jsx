import clsx from "clsx";
import styles from "./NavBar.module.css"

export const NavBar = () => {
  const items = ["Correo", "Imagene", "Icon", "Photo"];

  return (
    <header>
      <nav>
        <ul className={styles.navRightSection}>
          {items.map((item, index) => (
            <li key={index}>
              <a href="" className={clsx({
                [styles.iconOnly] : index === 2,
                [styles.photoOnly] : index === 3
              })}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
