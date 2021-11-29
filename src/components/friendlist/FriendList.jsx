import styles from "./FriendList.module.css";
import PropTypes from "prop-types";

function Item({ isOnline, avatar, name, id }) {
  return (
    <li className={styles.item} key={id}>
      {isOnline === true 
      ? (<span className={styles.statusOn}>{isOnline}</span>)
      : (<span className={styles.statusOff}>{isOnline} </span>)
      }
      <img
        className={styles.avatar}
        src={avatar}
        alt="Avatar"
        width="45"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

function FriendsList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {
        friends.map(({ avatar, name, isOnline, id }) => (
          <Item
            id={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
        ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends:  PropTypes.array,
};

export default FriendsList;
