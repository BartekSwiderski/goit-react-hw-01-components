import styles from "./Transactions.module.css";
import propTypes from "prop-types";

function Item({ id, type, amount, currency }) {
  return (
    <tr id={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

function Transactions({ items }) {
  return (
    <table className={styles.transactions}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Item
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  items: propTypes.array,
};

export default Transactions;
