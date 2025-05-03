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
        {path: "/experience", name: "experience"},
        {path: "/blog", name: "blog"},
        {path: "/contact", name: "contact"},
        {path: "/about", name: "about"},
    ]

    return (
        <html lang="en">
        <body
            className={`bg-coal flex-col antialiased lg:p-12 md:p-10 p-1 relative`}
        >
        <main className={"flex-col space-y-6  rounded-2xl " +
            "lg:max-w-3/4 m-auto px-8 py-4"}>
            <nav className={"flex flex-col md:flex-row justify-between items-start md:items-center transition-all " +
                "ease-in-out space-y-4 md:space-y-0"}>
                <Link href={"/"} className={"text-6xl font-[900] text-white group"}>
                    <span>rhys&apos; website.</span>
                    <div
                        className={"h-1.5 bg-jade rounded-full w-0 group-hover:w-full transition-all ease-in-out"}></div>
                </Link>
                <section className={"flex items-center sm:space-x-4 space-x-2 text-white"}>
                    {routes.map((route: Route) => (
                        <section className={"flex-col group"} key={route.name}>
                            <Link href={route.path}
                                  className={"sm:text-2xl text-lg font-[800] transition-all ease-in-out text-nowrap"}>{route.name}</Link>
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
