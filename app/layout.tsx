import type {Metadata} from "next";
import "./globals.css";
import Link from "next/link";
import {Undo2} from "lucide-react";

export const metadata: Metadata = {
    title: "Rhys' Website",
    description: "The wonderful modern website",
};

type Route = {
    path: string;
    name: string;
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const routes: Route[] = [
        {path: "/work", name: "work"},
        {path: "/blog", name: "blog"},
        {path: "/tools", name: "tools"},
        {path: "/contact", name: "contact"},
        {path: "/about", name: "story-time"},
    ]

    return (
        <html lang="en">
        <body
            className={`bg-cream flex-col antialiased lg:p-12 md:p-10 p-1 relative`}
        >
        <main className={"flex-col space-y-6  rounded-2xl " +
            "lg:max-w-3/4 m-auto px-8 py-4"}>
            <nav className={"flex flex-col md:flex-row justify-between items-start md:items-center transition-all " +
                "ease-in-out space-y-4 md:space-y-0"}>
                <Link href={"/"} className={"sm:text-8xl text-6xl font-[900] group"}>
                    <span>rhys&apos; website.</span>
                    <div
                        className={"h-1.5 bg-jade rounded-full w-0 group-hover:w-full transition-all ease-in-out"}></div>
                </Link>
                <section className={"flex items-center sm:space-x-4 space-x-2 bg-white " +
                    "border-[3px] shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_1)] border-black px-2 py-1 rounded-lg"}>
                    {routes.map((route: Route) => (
                        <section className={"flex-col group"} key={route.name}>
                            <Link href={route.path}
                                  className={"sm:text-2xl text-lg font-[800] transition-all ease-in-out"}>{route.name}</Link>
                            <div
                                className={"h-1 bg-jade rounded-full w-0 group-hover:w-full transition-all ease-in-out"}></div>
                        </section>
                    ))}
                </section>
            </nav>
            {children}
        </main>
        </body>
        </html>
    );
}
