import { NavLink } from "react-router-dom";
// import Button from "../Button/Button";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>
          Amazing Discounts
          <br /> on Garden Products!
        </h1>
        {/* <Link to="/all-sales">Check out<Link/>
        <Button text={"Check out"} /> */}
        <NavLink to="/all-sales">
          <div className={styles.linkBtn}>Check out</div>
        </NavLink>
      </div>
    </div>
  );
};

export default HeroSection;
