import React from "react";
import { IIconCustomProps } from "../../../interfaces";

const EnglishIcon: React.FC<IIconCustomProps> = ({
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
        <g clip-path="url(#clip0)" fill={colorHex}>
          <path d="M53.991 37.1a2.724 2.724 0 0 1-2.724-2.724V7.447h-9.534v26.929A2.724 2.724 0 0 1 39.01 37.1H0v9.533h39.009a2.724 2.724 0 0 1 2.724 2.725v26.921h9.534V49.358a2.724 2.724 0 0 1 2.724-2.725H93V37.1H53.991z" />
          <path d="M56.716 27.798 76.844 7.67a19.096 19.096 0 0 0-2.916-.223H56.716v20.351zM60.569 31.65H93v-5.13c0-7.374-4.206-13.782-10.344-16.955L60.569 31.65zM60.558 52.083l22.037 22.11C88.766 71.034 93 64.606 93 57.208v-5.124H60.558zM36.284 27.798V7.448H19.072c-.991 0-1.965.075-2.916.222l20.128 20.128zM56.716 55.947v20.332h17.212c.965 0 1.914-.072 2.84-.211L56.717 55.947zM32.431 31.65 10.344 9.566C4.206 12.737 0 19.146 0 26.52v5.13h32.431zM32.431 52.083H0v5.124c0 7.375 4.208 13.785 10.35 16.958L32.43 52.083zM36.284 55.936 16.163 76.058a19.2 19.2 0 0 0 2.91.221h2.83l6.633 8.416a2.726 2.726 0 0 0 4.28 0l3.468-4.4V55.936z" />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width={width} height={height} rx="10" fill={colorHex} />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default EnglishIcon;
