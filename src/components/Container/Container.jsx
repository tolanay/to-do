import React, { Children } from "react";
import "./Container.scss";

export default function Container({ children }) {
  return <div className="Container">{children}</div>;
}
