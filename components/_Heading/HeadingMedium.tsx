import React from "react";
import { PropsWithChildren } from "react";

export type HeadingMediumProps = PropsWithChildren;
export default function HeadingMedium(props: HeadingMediumProps) {
  return (
    <h3 className="mt-4 scroll-m-20 text-2xl font-semibold tracking-tight">
      {props.children}
    </h3>
  );
}
