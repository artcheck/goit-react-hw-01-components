import React from "react";
import FriendListItem from "./FriendsListItem";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <div>
      <FriendListItem friends={friends} />
    </div>
  );
};
FriendList.prototype = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
