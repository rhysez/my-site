import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import {ShipWheel} from "lucide-react";

export const metadata: Metadata = {
  title: "Rhys' Website",
  description: "The wonderful modern website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-cream flex-col antialiased lg:p-12 md:p-10 p-1 relative`}
      >
      <main className={"bg-white border-[3px] shadow-[4px_4px_0px_0px_rgba(0,_0,_0,_1)] border-black rounded-2xl " +
          "lg:max-w-3/4 xl:max-w-2/3 m-auto px-8 py-4"}>
          <nav className={"flex justify-between items-center transition-all ease-in-out"}>
              <Link href={"/"} className={"text-2xl font-[800] transition-all ease-in-out flex items-center space-x-2 group"}>
                  <ShipWheel className={"group-hover:animate-spin"} />
                  <span>rhys&apos; website</span>
              </Link>
              <section className={"flex items-center space-x-4"}>
                  <Link href={"/about"} className={"text-2xl font-[800] hover:text-jade transition-all ease-in-out"}>about</Link>
                  <Link href={"/work"} className={"text-2xl font-[800] hover:text-jade transition-all ease-in-out"}>work</Link>
                  <Link href={"/blog"} className={"text-2xl font-[800] hover:text-jade transition-all ease-in-out"}>blog</Link>
              </section>
          </nav>
          {children}
      </main>
      </body>
    </html>
  );
}
