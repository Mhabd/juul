/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 14"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M8.05.225A2.3 2.3 0 019.045 0c.342 0 .684.075.996.225l6.465 3.118-.78.769-6.145-2.964a1.25 1.25 0 00-1.071 0L1.726 4.42c-.414.2-.682.624-.682 1.077v4.682c0 .955.164 1.912.475 2.84l-.876.647A10.043 10.043 0 010 10.18V5.497c0-.842.497-1.628 1.266-2L8.05.225z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
