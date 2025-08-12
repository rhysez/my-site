"use client"

import { Button } from "@/components/ui/button";
import { ChartNoAxesGantt, Code, SquareChartGantt, SquareCode } from "lucide-react";
import Link from "next/link";

type Props = {
  href: string;
  variant?: "company" | "public";
}

export default function ViewProjectButton({ href, variant }: Props) {

  return (
    <Link href={href}>
      <Button className="bg-white hover:bg-jade text-coal font-bold flex items-center cursor-pointer">
        <span className="text-base">{variant === "company" ? "Visit product page" : "View project repository"}</span>
        {
          variant === "company" ?
            <SquareChartGantt />
            :
            <ChartNoAxesGantt />
        }
      </Button>

    </Link>)
}
