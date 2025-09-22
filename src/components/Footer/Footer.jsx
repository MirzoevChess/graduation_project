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
      <div className={styles.mapView}>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4072690877947!2d13.370209789234792!3d52.507968239325265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sen!2sde!4v1758543931345!5m2!1sen!2sde"
          width="600"
          height="450"
          style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}

        <iframe
          title="Plantify Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4072690877947!2d13.370209789234792!3d52.507968239325265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sen!2sde!4v1758543931345!5m2!1sen!2sde"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Footer;
