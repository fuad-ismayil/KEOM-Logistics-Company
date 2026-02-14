import { notFound } from "next/navigation";
import UnderConstruction from "@/components/ui/UnderConstruction";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// List of paths that should show the "Under Construction" page
const UNDER_CONSTRUCTION_PATHS = [
    "home/slider",
    "home/video",
    "services/details",
    "gallery",
    "team",
    "blog/details",
];

export default async function CatchAllPage({
    params,
}: {
    params: Promise<{ slug: string[] }>;
}) {
    const { slug } = await params;
    const path = slug.join("/");

    if (UNDER_CONSTRUCTION_PATHS.includes(path)) {
        return (
            <>
                <Header />
                <UnderConstruction />
                <Footer />
            </>
        );
    }

    return notFound();
}
