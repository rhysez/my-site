import Link from "next/link";


export default function HeroSection() {
    return (
        <article className={"py-6 space-y-4"}>
            <section>
                <p className={"lora text-xl font-[300]"}>
                    I&apos;m a web developer based in Cornwall, UK. This is my website.
                </p>
                <p className={"lora text-xl font-[300]"}>
                    I won&apos;t bore you, here&apos;s the important stuff at a glance...
                </p>
            </section>
           <hgroup>
               <h4 className={"text-3xl font-[900]"}>What I&apos;m currently doing</h4>
               <section className={"space-y-2 max-w-1/2"}>
                  <p className={"lora text-base font-[300]"}>
                      At the moment I&apos;m working for{" "}
                      <Link className={"underline hover:text-jade transition-all"} href={"https://quantavia.net"}>
                          Quantavia
                      </Link>
                      {" "}as a Software Engineer. (I even built their website!)
                      My day-to-day consists of building new products, co-ordinating with the UX team and writing documentation.
                      We specialise in designing and building software solutions for the aviation industry.

                  </p>
                  <p className={"lora text-base font-[300]"}>
                      I&apos;m still available for freelance gigs dependent on scope, so{" "}
                      <Link href={"/contact"} className={"underline hover:text-jade transition-all"}>get in touch</Link>{" "}
                      if you think I can help.
                  </p>
               </section>
           </hgroup>
            <hgroup>
                <h4 className={"text-3xl font-[900]"}>Freelance work</h4>
                <section className={"space-y-2 max-w-1/2"}>
                    <p className={"lora text-base font-[300]"}>
                        I am available for freelance work (dependent on scope) and you can{" "}
                        <Link href={"/contact"} className={"underline hover:text-jade transition-all"}>contact me directly</Link>{" "}
                        to enquire about a potential project.
                    </p>
                </section>
            </hgroup>
           <hgroup>
               <h4 className={"text-3xl font-[900]"}>Read my blog</h4>
               <section className={"space-y-2 max-w-1/2"}>
                   <p className={"lora text-base font-[300]"}>
                       I like to write about the multitude of things that interest me. A lot of this will be
                       tech related, but not always! If by some divine chance you are interested in seeing what I
                       have to say, I&apos;d encourage you to <Link href={"/blog"} className={"underline hover:text-jade transition-all"}>
                       take a look at my blog</Link>.
                   </p>
               </section>
           </hgroup>
        </article>
    )
}