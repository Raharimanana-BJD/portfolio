import { PropsWithChildren } from "react";

export type SectionProps = PropsWithChildren

export const Section = (props: SectionProps) => {
    return (
        <section className="container lg:px-4 px-2">
            {props.children}
        </section>
    )
}