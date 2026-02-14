import PageIntro from "@/components/sections/PageIntro";
import ServicesArea from "@/components/services/ServicesArea";
import TestimonialArea from "@/components/sections/TestimonialArea";
export default function Services() {
    return (
        <>
            <PageIntro title="Services" link="/services" />
            <ServicesArea />
            <TestimonialArea />
        </>
    );
}
