import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";
import HeartIcon from "../../icons/HeartIcon";
import CartIcon from "../../icons/CartIcon";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerLogo}>
        <Logo />
        <ThemeToggle />
      </div>
      <div className={styles.nav}>
        <Button text={"1 day discount!"} />
        <Navbar />
      </div>
      <div className={styles.headerActions}>
        <HeartIcon fill="none" stroke="var(--text-color)" />
        <CartIcon fill="none" stroke="var(--text-color)"/>
      </div>
    </div>
  );
};

export default Header;
