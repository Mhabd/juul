/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.892 3.728l.27.275.39-.384-.493-.238-.168.348zm-.78.769l-.168.347.244.118.194-.19-.27-.275zM1.903 13.405l.229.31.225-.167-.089-.265-.365.122zm-.875.646l-.362.134.178.48.413-.304-.23-.31zM9.43 0c-.398 0-.797.087-1.162.263l.334.694c.257-.124.542-.186.828-.186V0zm1.162.263A2.683 2.683 0 009.431 0v.77c.286 0 .57.063.828.187l.334-.694zm6.466 3.118L10.593.263l-.334.694 6.465 3.119.335-.695zm-.677 1.39l.78-.768-.54-.55-.781.77.54.548zm-6.583-2.89l6.145 2.963.335-.694-6.145-2.964-.335.695zm-.737 0c.23-.11.507-.11.737 0l.335-.694a1.636 1.636 0 00-1.406 0l.334.694zM2.278 5.152l6.784-3.271-.334-.695-6.784 3.272.334.694zm-.464.73a.82.82 0 01.464-.73l-.335-.694c-.544.264-.9.82-.9 1.425h.771zm0 4.682V5.883h-.77v4.681h.77zm.455 2.719a8.577 8.577 0 01-.455-2.719h-.77c0 1 .172 1.997.495 2.963l.73-.244zM1.257 14.36l.876-.646-.458-.62-.875.646.458.62zM0 10.564c0 1.226.233 2.449.667 3.621l.723-.267a9.66 9.66 0 01-.62-3.354H0zm0-4.681v4.681h.77V5.883H0zm1.484-2.348A2.627 2.627 0 000 5.883h.77c0-.693.411-1.346 1.05-1.654l-.336-.694zM8.27.263L1.484 3.535l.335.694L8.603.957 8.269.263z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
