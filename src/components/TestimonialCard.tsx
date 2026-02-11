import Image from "next/image";
export type Testimonial = { text: string; name: string; avatarSrc: string };
export default function TestimonialCard({item,shouldAnimate,}: {item: Testimonial;shouldAnimate: boolean;}) {
    return (
        <div className={`reveal-mask overflow-hidden ${shouldAnimate ? "animate" : ""}`}>
            <div className="h-full bg-white px-8 py-10 shadow-sm">
                <div className="mb-6">
                    <Image src="/images/testimonial/qt-icon.png" alt="Quote" width={54} height={54} className="w-[54px]" />
                </div>
                <p className="mb-8 text-[20px] text-[#003b49]">{item.text}</p>
                <div className="flex items-end justify-between gap-4">
                    <div>
                        <h6 className="text-[16px] font-semibold text-[#003b49]">{item.name}</h6>
                        <div className="mt-2">
                            <Image src="/images/testimonial/review-icon.png" alt="Reviews" width={101} height={15} className="w-[101px]" />
                        </div>
                    </div>
                    <div className="shrink-0">
                        <Image src={item.avatarSrc} alt={item.name} width={50} height={50} className="h-[50px] w-[50px] object-cover" />
                    </div>
                </div>
            </div>
        </div>);}