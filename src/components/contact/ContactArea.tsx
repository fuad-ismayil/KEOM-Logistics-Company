import React from 'react';
import { Map, Clock, MailOpen } from 'lucide-react';
import GetInTouch from './GetInTouch';
export default function ContactArea() {
    return (<>
        <section className="w-full items-center justify-center p-4 !py-[120px] md:p-8 flex flex-col lg:flex-row gap-10 items-start font-sans bg-white">
            <div className="w-full lg:w-[35%] max-w-[416px] flex flex-col gap-8 my-auto pt-4">
                <div className="flex gap-5 items-start pb-8 border-b border-gray-200">
                    <div className="shrink-0 w-[80px] h-[80px] rounded-full bg-[#eb7342] flex items-center justify-center text-white shadow-sm">
                        <Map size={32} strokeWidth={1.5} />
                    </div>
                    <div className="pt-1">
                        <h3 className="text-[#1a3b50] text-xl font-bold mb-2">Office Address</h3>
                        <p className="text-gray-500 leading-relaxed text-[15px]">
                            380 St Kilda Road, Melbourne<br />
                            VIC 3004, Australia
                        </p>
                    </div>
                </div>
                <div className="flex gap-5 items-start pb-8 border-b border-gray-200">
                    <div className="shrink-0 w-[80px] h-[80px] rounded-full bg-[#eb7342] flex items-center justify-center text-white shadow-sm">
                        <Clock size={32} strokeWidth={1.5} />
                    </div>
                    <div className="pt-1">
                        <h3 className="text-[#1a3b50] text-xl font-bold mb-2">Working Hours</h3>
                        <p className="text-gray-500 leading-relaxed text-[15px]">
                            Monday to Friday 09:00 to 18:30<br />
                            Saturday 15:30
                        </p>
                    </div>
                </div>
                <div className="flex gap-5 items-start">
                    <div className="shrink-0 w-[80px] h-[80px] rounded-full bg-[#eb7342] flex items-center justify-center text-white shadow-sm">
                        <MailOpen size={32} strokeWidth={1.5} />
                    </div>
                    <div className="pt-1">
                        <h3 className="text-[#1a3b50] text-xl font-bold mb-2">Message Us</h3>
                        <p className="text-gray-500 leading-relaxed text-[15px]">
                            support@example.com<br />
                            info@example.com
                        </p>
                    </div>
                </div>
            </div>
            <GetInTouch />
        </section>
        <div className=" lg:w-full h-[450px] mb-[7px] overflow-hidden">
            <div className="relative w-[92%] lg:w-full mx-auto h-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.7475460090136!2d49.81317337639031!3d40.370121771447124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc397d94dc3%3A0x617bc46b47244c00!2sAz%C9%99rbaycan%20Texniki%20Universiteti!5e0!3m2!1saz!2saz!4v1770714946278!5m2!1saz!2saz"
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
            </div>
        </div>
    </>);
}