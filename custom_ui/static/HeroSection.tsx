import Link from "next/link";
import HeroLink from "@/custom_ui/static/HeroLink";
import SectionHeader from "@/custom_ui/static/SectionHeader";
import SectionTextBody from "@/custom_ui/static/SectionTextBody";


export default function HeroSection() {
    return (
        <article className={"py-6 space-y-4 text-white"}>
            <section className={"space-y-2"}>
                <p className={"lora font-[300]"}>
                    I&apos;m a software developer based in Cornwall, UK. This is my website.
                </p>
                <p className={"lora font-[300]"}>
                    I won&apos;t bore you, here&apos;s the important stuff at a glance...
                </p>
            </section>
           <hgroup>
               <SectionHeader text={"what i'm currently doing"} />
               <SectionTextBody>
                  <p className={"lora text-base font-[300]"}>
                      At the moment I&apos;m working for{" "}
                      <Link className={"underline hover:text-jade transition-all"} href={"https://quantavia.net"}>
                          Quantavia
                      </Link>
                      {" "}as a Software Engineer.
                      My day-to-day consists of building new products, co-ordinating with the UX team and writing documentation.
                      We specialise in designing and building software solutions for the aviation industry.

                  </p>
               </SectionTextBody>
           </hgroup>
           <hgroup>
               <SectionHeader text={"my areas of focus"} />
               <SectionTextBody>
                  <p className={"lora text-base font-[300]"}>
                     The primary languages that I like to work with are TypeScript, C++ and PHP. The majority of my commercial experience
                     can be found in web and mobile development. However, I am regularly writing lower level software with technologies like C++
                     and CMake.
                  </p>
               </SectionTextBody>
           </hgroup>
            <hgroup>
                <SectionHeader text={"freelance work"} />
                <SectionTextBody>
                    <p className={"lora text-base font-[300]"}>
                        Depending on free time, I may be available for freelance work (dependent on scope) and you can{" "}
                        <Link href={"/contact"} className={"underline hover:text-jade transition-all"}>contact me directly</Link>{" "}
                        to enquire about a potential project.
                    </p>
                    <p className={"lora text-base font-[300]"}>
                        Due to working full time, my job is my priority. Any freelance work will be carried out during
                        free time and/or weekends.
                    </p>
                </SectionTextBody>
            </hgroup>
            <hgroup>
                <h4 className={"text-3xl font-[900]"}>links</h4>
                <section className={"flex flex-wrap items-center gap-2 max-w-1/2 mt-2"}>
                    <HeroLink url={"https://github.com/rhysez"} text={"Github"}/>
                    <HeroLink url={"https://www.linkedin.com/in/rhys-hodgson-8262b3218/"} text={"LinkedIn"}/>
                </section>
            </hgroup>
        </article>
    )
}
