import React from "react";
import { useLocation } from "react-router-dom";

const IceLevel = () => {
  const location = useLocation();
  // console.log(location.state.item);
  const { item } = location.state;

  return (
    <div>
      <p>{item._id}</p>
      <p>{item.lvl}</p>
      <p>{item.done ? "true" : "false"}</p>
      <p>{item.stars}</p>
    </div>
  );
};

export default IceLevel;
