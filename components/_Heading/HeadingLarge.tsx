import React from "react";
import { PropsWithChildren } from "react";

export type HeadingLargeProps = PropsWithChildren
export default function HeadingLarge(props: HeadingLargeProps) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {props.children}
    </h1>
  );
}
