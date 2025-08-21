import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <Link className={styles.navLink} to="/">Main Page</Link>
        </li>
        <li>
          <Link className={styles.navLink} to="/categories">Categories</Link>
        </li>
        <li>
          <Link className={styles.navLink} to="/all-products">All Products</Link>
        </li>
        <li>
          <Link className={styles.navLink} to="/all-sales">All Sales</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
