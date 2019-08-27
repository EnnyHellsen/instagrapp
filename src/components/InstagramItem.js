import React from "react";

export default ({ item, children, ...props }) => {
  return <div {...props}>{children}</div>;
};
