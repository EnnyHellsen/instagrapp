import React from "react";

export default ({ item, children, ...props }) => {
  return <div className="instagram-item" {...props}>{children}</div>;
};
