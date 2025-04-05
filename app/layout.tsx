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
        {path: "/about", name: "about"},
        {path: "/work", name: "work"},
        {path: "/blog", name: "blog"},
        {path: "/tools", name: "tools"},
    ]


    return (
        <html lang="en">
        <body
            className={`bg-cream flex-col antialiased lg:p-12 md:p-10 p-1 relative`}
        >
        <main className={"flex-col space-y-6 bg-white border-[3px] shadow-[6px_6px_0px_0px_rgba(0,_0,_0,_1)] border-black rounded-2xl " +
            "lg:max-w-3/4 xl:max-w-2/3 m-auto px-8 py-4"}>
            <nav className={"flex justify-between items-center transition-all ease-in-out"}>
                <Link href={"/"} className={"text-7xl font-[900] flex items-center space-x-2 group"}>
                    <span>rhys&apos; website.</span>
                    <Undo2 className={"text-white bg-coal p-1 rounded-sm " +
                        "group-hover:bg-jade  transition-all ease-in-out duration-500"} />
                </Link>
                <section className={"flex flex-col items-start md:flex-row md:items-center md:space-x-4"}>
                    {routes.map((route: Route) => (
                        <section className={"flex-col group"} key={route.name}>
                            <Link href={route.path}
                                  className={"text-2xl font-[800] transition-all ease-in-out"}>{route.name}</Link>
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
