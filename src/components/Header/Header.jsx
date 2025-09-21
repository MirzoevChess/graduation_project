import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../Logo/Logo";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Navbar from "../Navbar/Navbar";
import CounterBange from "../CounterBange/CounterBange";
import CartIcon from "../../icons/CartIcon";
import CustomHeartIcon from "../../icons/CustomHeartIcon";
import styles from "./Header.module.scss";

const Header = () => {
  const favoritesCount = useSelector((state) => state.favorites.items.length);
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
        <CounterBange count={favoritesCount}>
          <Link to="/favorites">
            <CustomHeartIcon fill="none" stroke="var(--text-color)" />
          </Link>
        </CounterBange>
        <Link to="#">
          <CartIcon fill="none" strokePath="var(--text-color)" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
