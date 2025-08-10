
import SectionHeader from "@/custom_ui/static/SectionHeader";
import SectionTextBody from "@/custom_ui/static/SectionTextBody";
import Link from "next/link";

export default function Page() {
  return (
    <article className={"py-6 space-y-4 text-white"}>
      <section className={"space-y-2"}>
        <p className={"lora font-[300]"}>
          Here&apos;s some personal projects I&apos;ve built.
        </p>
      </section>
      <hgroup>
        <SectionHeader text={"willow"} />
        <h5 className={"lora text-sm font-[900] my-2 opacity-75"}>Rust</h5>
        <SectionTextBody>
          <p className={"lora text-base font-[300]"}>
            Willow is a UNIX based CLI tool that allows you to visualise your system files in a tree-like format.
            The inspiration for this project was the GNU 'tree' program. Willow can recursively visualise your system files based on
            a user specified depth level, which determines how deep in the file system tree to scan. The source code is written in Rust.
          </p>
          <p className={"lora text-base font-[300]"}>
            You can view the Willow repository <Link className={"underline hover:text-jade transition-all"} href={"https://github.com/rhysez/willow"}>over here</Link>.
          </p>
        </SectionTextBody>
      </hgroup>
      <hgroup>
        <SectionHeader text={"trove"} />
        <h5 className={"lora text-sm font-[900] my-2 opacity-75"}>C++, Linux, macOS</h5>
        <SectionTextBody>
          <p className={"lora text-base font-[300]"}>
            Trove is a personal side-project that I open sourced this year. It is a CLI tool that allows you to
            sort your directories into sub-directories categorised by file type. It also allows you to restore directories
            to their former state. It&apos;s also really fast!
          </p>
          <p className={"lora text-base font-[300]"}>
            The Trove source code is written in pure C++ with a little bit of bash sprinkled in.
          </p>
          <p className={"lora text-base font-[300]"}>
            I decided to write Trove due to growing frustration with navigating my Downloads directory on my Linux Mint machine. I wanted to sort it out.
          </p>
          <p className={"lora text-base font-[300]"}>
            You can contribute or install Trove <Link className={"underline hover:text-jade transition-all"} href={"https://github.com/rhysez/trove"}>over here</Link>.
          </p>
        </SectionTextBody>
      </hgroup>

      <hgroup>
        <SectionHeader text={"ASCII snake"} />
        <h5 className={"lora text-sm font-[900] my-2 opacity-75"}>C++, CMake, Linux</h5>
        <SectionTextBody>
          <p className={"lora text-base font-[300]"}>
            I decided to build snake in it&apos;s most primitive form - in pure ASCII.
          </p>
          <p className={"lora text-base font-[300]"}>
            The game has been built using only three systems - two dimensional vectors, a linked list and linear search algorithms. It is playable in the terminal.
          </p>
          <p className={"lora text-base font-[300]"}>
            You can check out ASCII snake's source code <Link className={"underline hover:text-jade transition-all"} href={"https://github.com/rhysez/ascii_snake"}>over here</Link>.
          </p>
        </SectionTextBody>
      </hgroup>

    </article>

  )
}
