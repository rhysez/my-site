"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Route = {
	path: string;
	name: string;
};

type Props = { routes: Route[] };

export default function Nav({ routes }: Props) {
	const pathname = usePathname();

	return (
		<section
			className={
				"flex flex-col md:flex-row md:items-center sm:space-x-4 space-x-2 text-white"
			}
		>
			{routes.map((route: Route) => (
				<section className={"flex-col group"} key={route.name}>
					<Link
						href={route.path}
						className={clsx(
							"sm:text-2xl text-lg font-[800] transition-all ease-in-out text-nowrap",
							{ "text-jade": pathname === route.path }
						)}
					>
						{route.name}
					</Link>
					<div
						className={
							"h-1 bg-jade rounded-full w-0 group-hover:w-full transition-all ease-in-out"
						}
					></div>
				</section>
			))}
		</section>
	);
}
