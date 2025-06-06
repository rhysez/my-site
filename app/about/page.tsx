import SectionHeader from "@/custom_ui/static/SectionHeader";
import SectionTextBody from "@/custom_ui/static/SectionTextBody";

export default function Page() {
    return (
        <article className={"py-6 space-y-4 text-white"}>
            <section className={"space-y-2"}>
                <p className={"lora font-[300]"}>
                    This is the part where I tell you all about myself.
                </p>
            </section>

            <hgroup>
                <SectionHeader text={"about me"} />
                <SectionTextBody>
                    <p className={"lora text-base font-[300]"}>
                        I&apos;m a software developer from Cornwall who primarily works with web and mobile technologies.
                        I like to keep up to date with the tech world as we know it. I originally got started with programming by
                        learning how to build websites as a hobby while I worked as a sales advisor in a call centre, and
                        I quickly became obsessed with <em>everything</em>. I really hated my job at the time, so I saw a real
                        opportunity to make a career change into tech as a software developer.
                    </p>
                    <p className={"lora text-base font-[300]"}>
                        I&apos;m really into gaming and coastal walks too.
                    </p>
                </SectionTextBody>
            </hgroup>
            <hgroup>
                <SectionHeader text={"about the website"} />
                <SectionTextBody>
                    <p className={"lora text-base font-[300]"}>
                        This website is a Next.js project. It uses TypeScript and Tailwind CSS.
                    </p>
                </SectionTextBody>
            </hgroup>
            <hgroup>
                <SectionHeader text={"tools i like"} />
                <SectionTextBody>
                    <p className={"lora text-base font-[300]"}>
                        I thought I&apos;d include this section so that I can recommend a few tools that I personally like
                        using as part of my day-to-day work.
                    </p>

                    <ul className={"lora text-base font-[300] list-disc ml-4 flex-col space-y-2"}>
                        <li>Obsidian - I find that note taking is a very valuable thing as a developer.
                            Obsidian is an open source, almost infinitely configurable note taking app that
                            stores everything in markdown. I literally use it for everything.</li>
                        <li>NeoVim - I spent around 8 to 9 months using the Vim motions plugin for VS Code until
I could eventually write code without experiencing diabolical levels of frustration. It was damn worth it though. NeoVim is more responsive than any
IDE I&apos;ve used and lets me focus on the work at hand.</li>
                        <li>Excalidraw - I really like using this to sketch out diagrams before I start building a feature or project.
                         There is also a great plugin for Obsidian.</li>
                    </ul>
                </SectionTextBody>
            </hgroup>
        </article>
    )
}
