import React from "react";

function Container({ children, ...props }) {
  return <div className="max-w-[1240px] mx-auto max-xl:mx-3" {...props}>{children}</div>;
}

export default Container;
