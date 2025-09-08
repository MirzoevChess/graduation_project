import contactItems from "./contactItems";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.contactsContainer}>
      <div className={styles.title}>Contact</div>
      <div className={styles.contacts}>
        {contactItems.map((item, index) => (
          <div key={index} className={styles.contactCard}>
            <span className={styles.spanTitle}>{item.title}</span>
            <span className={styles.spanContent}>{item.content}</span>
          </div>
        ))}
      </div>
      <div className={styles.mapView}>GOOGLE MAP</div>
    </div>
  );
};

export default Footer;
