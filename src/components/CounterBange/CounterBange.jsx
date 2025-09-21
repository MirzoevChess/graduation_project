import styles from "./CounterBange.module.scss";

const CounterBange = ({ count, children }) => {
  return (
    <div className={styles.badgeWrapper}>
      {children}
      {count > 0 && <span className={styles.count}>{count}</span>}
    </div>
  );
};

export default CounterBange;
