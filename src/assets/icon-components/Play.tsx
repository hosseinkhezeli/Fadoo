import React from "react";

const Play = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
    >
      <path
        fill="inherit"
        fillOpacity={0}
        stroke="inherit"
        strokeDasharray={40}
        strokeDashoffset={40}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 6l10 6l-10 6Z"
      >
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.5s"
          dur="0.5s"
          values="0;1"
        ></animate>
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.5s"
          values="40;0"
        ></animate>
      </path>
    </svg>
  );
};

export default Play;
