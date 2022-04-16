import React from "react";
import { IIconCustomProps } from "../../../interfaces";

const SpanishIcon: React.FC<IIconCustomProps> = ({
  colorHex,
  width,
  height,
}) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 34.322h93v15.09H0v-15.09zM93 28.873V26.52c0-10.516-8.556-19.072-19.072-19.072H19.072C8.556 7.447 0 16.003 0 26.52v2.353h93zM0 54.861v2.346c0 10.517 8.556 19.072 19.072 19.072h2.83l6.634 8.416a2.726 2.726 0 0 0 4.28 0l6.633-8.416h34.479C84.444 76.28 93 67.724 93 57.207V54.86H0z"
          fill={colorHex}
        />
      </svg>
    </>
  );
};

export default SpanishIcon;
