import PageIntro from "@/components/sections/PageIntro";
import InnerBlog from "@/components/blog/InnerBlog";
export default function Blog() {
    return (
        <>
            <PageIntro title="Blog" link="/blog" />
            <InnerBlog />
        </>
    );
}