import AboutPageIntro from "@/components/about/AboutPageIntro";
import AboutArea from "@/components/AboutArea";
import HowItWorks from "@/components/HowItWorks";
import TestimonialArea from "@/components/TestimonialArea";
import TeamArea from "@/components/TeamArea";
import BookingArea from "@/components/BookingArea";
export default function About() {
    return (
        <>
            <AboutPageIntro />
            <AboutArea />
            <HowItWorks />
            <TestimonialArea />
            <TeamArea />
            <BookingArea />
        </>
    );
}