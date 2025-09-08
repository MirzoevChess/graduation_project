import Button from "../Button/Button";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>
          Amazing Discounts
          <br /> on Garden Products!
        </h1>
        <Button text={"Check out"} />
      </div>
    </div>
  );
};

export default Hero;
