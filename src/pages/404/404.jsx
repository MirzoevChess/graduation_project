import { Link } from "react-router-dom";
import NotFoundImg from "../../assets/404.png";
import styles from "./404.module.scss";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <img src={NotFoundImg} alt="Page not found" />
      <div className={styles.text}>
        <h2 className={styles.title}>Page not found</h2>
        <p className={styles.sorry}>
          We’re sorry, the page you requested could not be found.
          <br /> Please go back to the homepage
        </p>
      </div>
      <Link to="/">
        <div className={styles.linkBtn}>Go Home</div>
      </Link>
    </div>
  );
};

export default NotFound;
