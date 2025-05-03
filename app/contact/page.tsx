import SectionHeader from "@/custom_ui/static/SectionHeader";
import SectionTextBody from "@/custom_ui/static/SectionTextBody";

export default function Page() {
    return (
        <article className={"py-6 space-y-4 text-white"}>
            <p className={"lora font-[300]"}>
                Find out how to contact me
            </p>

            <hgroup>
                <SectionHeader text={"contact me"} />
                <SectionTextBody>
                    <p className={"lora text-base font-[300]"}>
                       If you would like to contact me for freelance enquiries, please consider
                        {" "}<a className={"underline hover:text-jade transition-all"} href={"mailto:rhyshodgsondev@gmail.com"}>sending me an email.</a>
                    </p>

                    <p className={"lora text-base font-[300]"}>
                        If you would like to contact me for other professional opportunities, please consider
                        {" "}<a className={"underline hover:text-jade transition-all"} href={"https://www.linkedin.com/in/rhys-hodgson-8262b3218/"}>connecting with me on LinkedIn.</a>
                    </p>
                </SectionTextBody>
            </hgroup>

        </article>
    )
}
