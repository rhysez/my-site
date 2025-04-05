type Props = {text: string}

export default function SectionHeader({text}: Props) {
    return <h4 className={"text-3xl font-[900]"}>{text}</h4>
}