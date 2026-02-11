import Link from "next/link";
import { FileQuestion } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
    return (
        <>
            <Header />
            <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#003c49] px-4 text-center">
                <div className="mb-8 rounded-full bg-[#ff6c41] p-6">
                    <FileQuestion className="h-12 w-12 text-[#003B49]" />
                </div>
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    404 - Page Not Found
                </h1>
                <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                    Sorry, we couldn't find the page you're looking for.
                </p>
                <Link
                    href="/"
                    className="inline-flex h-12 items-center justify-center bg-[#ff6c41] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#003B49]"
                >
                    Back to Home
                </Link>
            </div>
            <Footer />
        </>
    );
}
