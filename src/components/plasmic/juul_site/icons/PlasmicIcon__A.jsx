/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function AIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1120 504"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1100 0H20C8.954 0 0 8.954 0 20v464c0 11.046 8.954 20 20 20h1080c11.05 0 20-8.954 20-20V20c0-11.046-8.95-20-20-20z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AIcon;
/* prettier-ignore-end */
