import React from "react";

const ShowComponent = ({ condition, children }) => {
  return <div>{condition ? <div>{children}</div> : null}</div>;
};

export default ShowComponent;
