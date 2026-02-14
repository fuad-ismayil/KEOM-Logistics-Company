import PageIntro from "@/components/sections/PageIntro";
import AboutArea from "@/components/sections/AboutArea";
import HowItWorks from "@/components/sections/HowItWorks";
import TestimonialArea from "@/components/sections/TestimonialArea";
import TeamArea from "@/components/sections/TeamArea";
import BookingArea from "@/components/sections/BookingArea";
export default function About() {
    return (
        <>
            <PageIntro title="About Us" link="/about" />
            <AboutArea />
            <HowItWorks />
            <TestimonialArea />
            <TeamArea />
            <BookingArea />
        </>
    );
}