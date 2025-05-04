import styles from "./NavBar.module.css"

export const NavBar = () => {
  const items = ["Correo", "Imagenes", "Icon", "Photo"];

  return (
    <header>
      <nav>
        <ul className={styles.navRightSection}>
          {items.map((item, index) => (
            <li key={index}>
              <a href="" className={index === 2 ? styles.iconOnly : "" }>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
