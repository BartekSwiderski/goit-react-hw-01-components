import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

function Item({ id, label, percentage }) {
  return (
    <li className={styles.item} id={id}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}

const Statistics = ({ statistic, title }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
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
  title: PropTypes.string,
  statistics: PropTypes.array,
};

export default Statistics;
