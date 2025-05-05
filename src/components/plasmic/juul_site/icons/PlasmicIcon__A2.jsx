/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function A2Icon(props) {
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
        d={
          "M1110.83 0H20.197C9.042 0 0 9.042 0 20.197v286.796c0 11.155 9.042 20.197 20.197 20.197H1110.83c11.15 0 20.2-9.042 20.2-20.197V20.197c0-11.155-9.05-20.197-20.2-20.197z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default A2Icon;
/* prettier-ignore-end */
