import SectionHeader from "@/custom_ui/static/SectionHeader";
import SectionTextBody from "@/custom_ui/static/SectionTextBody";
import Link from "next/link";

export default function Page() {
  return (
    <article className={"py-6 space-y-4 text-white"}>
      <section className={"space-y-2"}>
        <p className={"lora font-[300]"}>
          Here&apos;s some real world software I&apos;ve worked on.
        </p>
        <p className={"lora font-[300] text-wrap max-w-xl"}>
          Note: Not all of this software is publicly accessible. Services like FlightCrewManager and FCM Hub are only
          available to users who pay for a subscription. I do not own FlightCrewManager, FCM Hub, the FCM API, or the Quantavia site.
        </p>
      </section>

      <hgroup>
        <SectionHeader text={"digital forms (for flightcrewmanager)"} />
        <h5 className={"lora text-sm font-[900] my-2 opacity-75"}>TypeScript, Next.js, TailwindCSS, PHP (Laravel), MongoDB</h5>
        <SectionTextBody>
          <p className={"lora text-base font-[300]"}>
            I was a key contributor to the innovative Digital Forms web module for FlightCrewManager, also known as FCM.
            FCM is a major re-write of an existing successful web SaaS called HeliCrewManager that supports thousands of users.
          </p>
          <p className={"lora text-base font-[300]"}>
            The Digital Forms module is a sophisticated drag-and-drop interface that consumes the FCM API and uses MongoDB for persistent form storage.
          </p>
          <p className={"lora text-base font-[300]"}>
            It allows flight operations to build custom digital forms for training, safety, and fatigue that were otherwise
            carried out on paper. This project generated new clients for the business due to the positive impression made on
            many real world flight operations.
          </p>
          <p className={"lora text-base font-[300]"}>
            At the time of writing this, we are continuing to iterate on Digital Forms to extend it&apos;s functionality. You can find out more
            on the Quantavia blog <Link className={"underline hover:text-jade transition-all"} href={"https://quantavia.net/blog"}>here</Link>.
          </p>
        </SectionTextBody>
      </hgroup>

      <hgroup>
        <SectionHeader text={"fcm hub"} />
        <h5 className={"lora text-sm font-[900] my-2 opacity-75"}>TypeScript, React Native, TailwindCSS, Jest</h5>
        <SectionTextBody>
          <p className={"lora text-base font-[300]"}>
            I built and designed a native mobile app that acts as a companion to FlightCrewManager, called FCM Hub.
            It serves hundreds of users at the time of writing this.
          </p>
          <p className={"lora text-base font-[300]"}>
            This project came about due to the need for a "crew app" for flight crews. I decided to adopt React Native
            in order to leverage my existing experience with web technologies to build a fast mobile app that allows flight crews
            to submit forms from the Digital Forms module (see above), edit their roster, and view real GPS data for their flights.
          </p>
          <p className={"lora text-base font-[300]"}>
            FCM Hub was built and maintained purely by me from version 1.0.0 until version 1.5.2, at the time of writing
            this additional members of the development team are now assisting with the project.
          </p>
          <p className={"lora text-base font-[300]"}>
            It is available to HeliCrewManager/FlightCrewManager users.
            You can download it from the <Link className={"underline hover:text-jade transition-all"} href={"https://apps.apple.com/us/app/fcm-hub/id6514305072"}>App Store</Link>{" "}
            and <Link className={"underline hover:text-jade transition-all"} href={"https://play.google.com/store/apps/details?id=com.rhyshodgsondev.fcmcrewappnative&hl=en_GB&pli=1"}>Google Play Store</Link>.
          </p>
        </SectionTextBody>
      </hgroup>

      <hgroup>
        <SectionHeader text={"fcm api"} />
        <h5 className={"lora text-sm font-[900] my-2 opacity-75"}>PHP (Laravel), MySQL, MongoDB, Kubernetes, AWS S3</h5>
        <SectionTextBody>
          <p className={"lora text-base font-[300]"}>
            I have made key contributions to the FCM API, which powers multiple services within the main Kubernetes
            cluster for Quantavia.
          </p>
          <p className={"lora text-base font-[300]"}>
            One such contribution was an implementation of a cloud media repository for users of the Digital Forms module.
            This system allows users to upload media files (JPG, JPEG, PNG) to the API, at which point these files are optimised and stored in S3.
            Users can then pull these files into the Digital Forms module to view all of their media.
          </p>
          <p className={"lora text-base font-[300]"}>
            I have also contributed to unit testing, HTTP testing and assisted in logic re-writes that interface with a MySQL database.
          </p>
        </SectionTextBody>
      </hgroup>

      <hgroup>
        <SectionHeader text={"quantavia.net"} />
        <h5 className={"lora text-sm font-[900] my-2 opacity-75"}>TypeScript, React, TailwindCSS, QuillJS</h5>
        <SectionTextBody>
          <p className={"lora text-base font-[300]"}>
            I built the official website and blog for the Cornwall-based software company Quantavia.
          </p>
          <p className={"lora text-base font-[300]"}>
            This website is the face of the brand, acting as a method of communication for company updates,
            change-logs, announcements, and product overviews. During initial 1.0 development, I had to co-ordinate with the UX team to replicate design files.
          </p>
          <p className={"lora text-base font-[300]"}>
            Visit the site <Link className={"underline hover:text-jade transition-all"} href={"https://quantavia.net"}>here</Link>.
          </p>
        </SectionTextBody>
      </hgroup>
    </article>

  )
}
