import {ReactNode} from "react";

type Props = {children: ReactNode}
export default function SectionTextBody({children}: Props) {
    return (
        <section className={"space-y-2 md:max-w-1/2"}>
            {children}
        </section>
    )
}