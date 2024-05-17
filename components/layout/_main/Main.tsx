import React from 'react'
import { PropsWithChildren } from 'react'

export type MainProps = PropsWithChildren
export default function Main(props: MainProps) {
  return (
    <main>{props.children}</main>
  )
}
