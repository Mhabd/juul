/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BtnArrowSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#bbx6r5dsUIUra)"}>
        <path
          d={
            "M5 7a.547.547 0 00-.124-.375 21.743 21.743 0 00-4-3.979.643.643 0 00-.563-.125.556.556 0 00-.313.5v7.957a.556.556 0 00.312.5.637.637 0 00.562-.125 21.74 21.74 0 004-3.979A.543.543 0 005 7z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <clipPath id={"bbx6r5dsUIUra"}>
          <path fill={"currentColor"} d={"M0 0h5v12H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default BtnArrowSvgIcon;
/* prettier-ignore-end */
