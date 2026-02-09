import PageIntro from "@/components/PageIntro";
import ServicesArea from "@/components/services/ServicesArea";
import TestimonialArea from "@/components/TestimonialArea";
export default function Services() {
    return (
        <>
            <PageIntro title="Services" link="/services" />
            <ServicesArea />
            <TestimonialArea />
        </>
    );
}
    