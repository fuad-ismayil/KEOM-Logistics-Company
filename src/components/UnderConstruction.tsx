import Link from "next/link";
import { Construction } from "lucide-react";

export default function UnderConstruction() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center bg-[#003c49] px-4 text-center">
            <div className="mb-8 rounded-full bg-orange-100 p-6 dark:bg-orange-900/20">
                <Construction className="h-12 w-12 text-[#ff7d44]" />
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Under Construction
            </h1>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                We're working hard to bring you this page. Please check back soon!
            </p>
            <Link
                href="/"
                className="inline-flex h-12 items-center justify-center bg-[#ff6c41] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff7d44]"
            >
                Back to Home
            </Link>
        </div>
    );
}
