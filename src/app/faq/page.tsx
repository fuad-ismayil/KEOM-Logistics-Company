import FaqArea from "@/components/faq/FaqArea";
import PageIntro from "@/components/sections/PageIntro";
import BrandArea from "@/components/faq/BrandArea";
export default function Page() {
    return (
        <>
            <PageIntro title="FAQ" link="/faq" />
            <FaqArea />
            <BrandArea />
        </>
    );
}
