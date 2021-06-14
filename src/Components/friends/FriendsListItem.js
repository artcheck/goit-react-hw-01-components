import React from "react";
import styles from "./FriendsList.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map((friend) => (
        <ul className={styles.list}>
          <li className={styles.item} key={friend.id}>
            <span
              className={
                friend.isOnline ? styles.status : styles.status_offline
              }
            >
              {friend.isOnline}
            </span>
            <img
              className={styles.avatar}
              src={friend.avatar}
              alt=""
              width="48"
            />
            <p className={styles.name}>{friend.name}</p>
          </li>
        </ul>
      ))}
    </>
  );
};

FriendListItem.prototype = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendListItem;
