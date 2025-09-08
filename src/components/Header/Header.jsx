import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Navbar from "../Navbar/Navbar";
import CartIcon from "../../icons/CartIcon";
import CustomHeartIcon from "../../icons/CustomHeartIcon";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerLogo}>
        <Logo />
        <ThemeToggle />
      </div>
      <div className={styles.nav}>
        <Link to="#">
          <div className={styles.linkBtn}>1 day discount!</div>
        </Link>
        <Navbar />
      </div>
      <div className={styles.headerActions}>
        <Link to="#">
          <CustomHeartIcon fill="none" stroke="var(--text-color)" />
        </Link>
        <Link to="#">
          <CartIcon fill="none" strokePath="var(--text-color)" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
