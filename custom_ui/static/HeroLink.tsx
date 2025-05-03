import Link from "next/link";


type Props = {
    text: string;
    url: string;
}

export default function HeroLink({text, url}: Props) {
   return (
       <Link
           href={url}
           className={"lora font-[500] text-lg transition-all hover:text-jade underline"}>
           {text}
       </Link>
   )
}