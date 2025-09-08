import { NavLink } from "react-router-dom";
import styles from "./HomePagesection.module.scss";

const HomePageSection = ({
  sectionTitle,
  linkPath,
  linkTitle,
  items = [],
  renderItem = () => null,
  loading,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          <h2>{sectionTitle}</h2>
          <div className={styles.sectionLineWrapper}>
            <div className={styles.sectionLine}></div>
            <NavLink to={linkPath}>
              <div className={styles.sectionBtn}>{linkTitle}</div>
            </NavLink>
          </div>
        </div>

        <div className={styles.sectionList}>
          {items.length ? items.map(renderItem) : loading}
        </div>
      </div>
    </div>
  );
};

export default HomePageSection;
