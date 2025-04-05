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
            <h4 className={"text-3xl font-[900]"}>Professional work</h4>
        </article>
    )
}