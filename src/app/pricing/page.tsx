import PageIntro from "@/components/sections/PageIntro";
import PricingArea from "@/components/pricing/PricingArea";
export default function Pricing() {
    return (
        <>
            <PageIntro title="Pricing" link="/pricing" />
            <PricingArea />
        </>
    );
}