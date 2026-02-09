import Link from "next/link";
export default function PageIntro({title,link}: {title: string;link: string;}) {
    return (
        <section className="overflow-hidden introduction justify-center min-h-[450px] bg-fixed -z-10 flex w-full flex-col bg-[url('/images/introduction/bg.jpg')] bg-cover bg-center px-[24px] lg:px-[8%]">
            <h2 className="text-white text-[35px] lg:text-[60px] font-[700]">{title}</h2>
            <div className="hidden lg:flex gap-[20px]">
                <Link href="/" className="text-[#fff] font-[700] text-[16px]">Home</Link>
                <span className="text-white text-[16px] font-[700]">|</span>
                <Link href={link} className="text-white text-[16px] font-[700]">{title}</Link>
            </div>
        </section>
    );
}
