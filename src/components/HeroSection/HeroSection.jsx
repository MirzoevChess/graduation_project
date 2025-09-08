import { Link } from "react-router-dom";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>
          Amazing Discounts
          <br /> on Garden Products!
        </h1>
        <Link to="/all-sales">
          <div className={styles.linkBtn}>Check out</div>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
