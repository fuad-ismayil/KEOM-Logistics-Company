import PageIntro from "@/components/sections/PageIntro";
import ContactArea from "@/components/contact/ContactArea";
export default function Contact() {
    return (
        <>
            <PageIntro title="Contact Us" link="/contact" />
            <ContactArea />
        </>
    );
}