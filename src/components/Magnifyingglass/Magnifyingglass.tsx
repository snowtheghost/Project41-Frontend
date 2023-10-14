import React from "react";
import "./style.css";

interface Props {
  className: any;
  magnifyingglassClassName: any;
}

export const Magnifyingglass = ({ className, magnifyingglassClassName }: Props): JSX.Element => {
  return (
    <div className={`magnifyingglass ${className}`}>
      <div className={`text-wrapper ${magnifyingglassClassName}`}>?</div>
    </div>
  );
};

export default Magnifyingglass;
