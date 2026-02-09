import FaqArea from "@/components/faq/FaqArea";
import FaqPageIntro from "@/components/faq/FaqPageIntro";
import BrandArea from "@/components/faq/BrandArea";


export default function Page() {
    return (
        <>
            <FaqPageIntro />
            <FaqArea />
            <BrandArea />
        </>
    );
}
