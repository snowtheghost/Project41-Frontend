import React from "react";

interface Props {
  className: any;
}

export const Mic2 = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`mic-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_26_621)">
        <path
          className="path"
          d="M12 14C13.66 14 15 12.66 15 11V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 12.66 10.34 14 12 14Z"
          fill="black"
        />
        <path
          className="path"
          d="M17 11C17 13.76 14.76 16 12 16C9.24 16 7 13.76 7 11H5C5 14.53 7.61 17.43 11 17.92V21H13V17.92C16.39 17.43 19 14.53 19 11H17Z"
          fill="black"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_26_621">
          <rect className="rect" fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};
