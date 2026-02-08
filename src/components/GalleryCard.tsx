import Image from "next/image";
export type GalleryItem = { imageSrc: string; iconSrc: string; tag: string; title: string; };
type GalleryCardProps = { item: GalleryItem; onClick: () => void; priority?: boolean; };
export default function GalleryCard({ item, onClick, priority = false }: GalleryCardProps) {
    return (
        <button type="button" onClick={onClick} className="block w-full text-left">
            <figure className="group relative bg-white">
                <div className="relative mx-auto h-[380px] w-[276px] lg:w-[564px] overflow-hidden sm:mx-0 sm:h-auto sm:w-full sm:aspect-[16/9]">
                    <Image src={item.imageSrc} alt={item.title} fill className="object-cover" sizes="(max-width: 640px) 276px, (max-width: 1024px) 48vw, 33vw" priority={priority} />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <figcaption className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-10">
                        <div className="flex items-center gap-3">
                            <div className="relative h-10 w-10 shrink-0">
                                <Image src={item.iconSrc} alt="" fill className="object-contain" sizes="40px" />
                            </div>
                            <div className="min-w-0">
                                <div className="text-[10px] hidden font-semibold uppercase tracking-[0.2em] text-white/70">{item.tag}</div>
                                <div className="mt-1 truncate text-[16px] font-semibold text-white">{item.title}</div>
                            </div>
                        </div>
                    </figcaption>
                </div>
            </figure>
        </button>);}