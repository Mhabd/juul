/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector8Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1132 328"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M1131.02 1H1v326.18h1130.02V1z"}
        stroke={"currentColor"}
        strokeOpacity={".2"}
        strokeWidth={"1.01"}
      ></path>
    </svg>
  );
}

export default Vector8Icon;
/* prettier-ignore-end */
