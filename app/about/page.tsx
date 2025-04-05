import SectionHeader from "@/custom_ui/static/SectionHeader";
import SectionTextBody from "@/custom_ui/static/SectionTextBody";

export default function Page() {
    return (
        <article className={"py-6 space-y-4"}>
            <section className={"space-y-2"}>
                <p className={"lora text-xl font-[300]"}>
                    This is the part where I tell you all about myself.
                </p>
                <p className={"lora text-xl font-[300]"}>
                   Wait... you&apos;re <em>actually</em> reading this?

                </p>
                <p className={"lora text-xl font-[300]"}>
                    Okay, here&apos;s how I got to where I am today...
                </p>
            </section>

            <hgroup>
                <SectionHeader text={"1. setting the scene"} />
                <SectionTextBody>
                    <p className={"lora text-base font-[300]"}>
                        It wouldn&apos;t be unreasonable to say that I&apos;ve always been a massive geek. In fact it
                        would be 100% accurate to say so. But here&apos;s the problem - Cornwall has never had that
                        many opportunities for people who want to get into the tech industry. I live by the sea, where
                        pretty much anyone can become a chef or tradesman - but not a full time programmer. I&apos;ve always
                        had a fascination with <em>how stuff actually works</em>, so I ended up aspiring to be a game
                        developer like every other kid my age.
                    </p>
                    <p className={"lora text-base font-[300]"}>
                        And then I realised, "there are literally no game dev jobs here".
                    </p>
                    <p className={"lora text-base font-[300]"}>
                        So I graduated with some A-levels thinking I wanted to become some sort of journalist, because
                        I really enjoyed writing about my interests, one of which being horror films.
                    </p>
                    <p className={"lora text-base font-[300]"}>
                        I didn&apos;t become a journalist. Who in their right mind would do that?
                    </p>
                </SectionTextBody>
            </hgroup>
            <hgroup>
                <SectionHeader text={"2. reality sinks in"} />
                <SectionTextBody>
                    <p className={"lora text-base font-[300]"}>
                        Eventually I ended up working in B2C sales. I became pretty good at it! But here&apos;s the
                        problem - it sucked. Unrealistic targets, poor work life balance and a myriad of other
                        big corporation tropes. This started to affect my relationships and mental health. Something had
                        to change.
                    </p>
                </SectionTextBody>
            </hgroup>
            <hgroup>
                <SectionHeader text={"3. the dark nerd rises"} />
                <SectionTextBody>
                    <p className={"lora text-base font-[300]"}>
                        I thought about game dev again, played around with tools like Unity and Unreal. While I enjoyed
                        the learning process, I found the prospect of making a game very risky.
                    </p>
                    <p className={"lora text-base font-[300]"}>
                        The part that kept me coming back was the <em>coding</em>. That&apos;s it, I can learn to code.
                        So I became a web developer.
                    </p>
                </SectionTextBody>
            </hgroup>
            <hgroup>
                <SectionHeader text={"4. fast forward to now"} />
                <SectionTextBody>
                    <p className={"lora text-base font-[300]"}>
                        I&apos;m now working in a team of really cool people and I have the freedom to pursue
                        other business ventures in my spare time using the skills that I&apos;ve learned along
                        the way. So I decided to build this site so that I can talk about the things that interest
                        me, update you on my journey and offer freelance services where required.
                    </p>
                    <p className={"lora text-base font-[300]"}>
                        I want this page to serve as a word of encouragement to those who feel the need to make a
                        drastic change in their lives. All of the sarcasm aside, I really am lucky to do what I do for a
                        living.
                    </p>
                </SectionTextBody>
            </hgroup>
        </article>
    )
}