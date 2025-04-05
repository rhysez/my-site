import Link from "next/link";


type Props = {
    text: string;
    url: string;
}

export default function HeroLink({text, url}: Props) {
   return (
       <Link
           href={url}
           className={"border-[3px] shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_1)] border-black rounded-md bg-white " +
               "px-1.5 py-0.5 lora font-[500] text-lg transition-all hover:bg-grapefruit hover:text-white"}
       >
           {text}
       </Link>
   )
}