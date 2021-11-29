import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

function Item({ id, label, percentage }) {
  return (
    <li className={styles.item} key={id}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}

const Statistics = ({ statistic}) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>
      <ul className={styles.statList}>
        {
          statistic.map(({ id, label, percentage }) => (
            <Item key={id} id={id} label={label} percentage={percentage} />
          ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  statistics: PropTypes.array,
};

export default Statistics;
