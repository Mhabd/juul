/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1121 505"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1100.5 1H20.5C9.73 1 1 9.73 1 20.5v464C1 495.27 9.73 504 20.5 504h1080c10.77 0 19.5-8.73 19.5-19.5v-464c0-10.77-8.73-19.5-19.5-19.5z"
        }
        stroke={"currentColor"}
        strokeOpacity={".2"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
