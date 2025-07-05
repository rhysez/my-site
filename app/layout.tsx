import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { headers } from "next/headers";
import clsx from "clsx";
import Nav from "@/custom_ui/dynamic/Nav";

export const metadata: Metadata = {
	title: "Rhys' Website",
	description: "The wonderful modern website",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const routes = [
		{ path: "/commercial", name: "commercial work" },
		{ path: "/personal", name: "personal projects" },
		{ path: "/contact", name: "contact" },
		{ path: "/about", name: "about" },
	];

	return (
		<html lang="en">
			<body
				className={`bg-coal flex-col antialiased lg:p-12 md:p-10 p-1 relative`}
			>
				<main
					className={
						"flex-col space-y-6  rounded-2xl " +
						"lg:max-w-3/4 m-auto px-8 py-4"
					}
				>
					<nav
						className={
							"flex flex-col md:flex-row justify-between items-start md:items-center transition-all " +
							"ease-in-out space-y-4 md:space-y-0"
						}
					>
						<Link
							href={"/"}
							className={"text-6xl font-[900] text-white group"}
						>
							<span>rhys&apos; website.</span>
							<div
								className={
									"h-1.5 bg-jade rounded-full w-0 group-hover:w-full transition-all ease-in-out"
								}
							></div>
						</Link>
						<Nav routes={routes} />
					</nav>
					{children}
				</main>
			</body>
		</html>
	);
}
