import React from 'react';
import { Map, Clock, MailOpen } from 'lucide-react';
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
      <div className="w-full lg:w-[65%] max-w-[856px] bg-[#f5f5f5] p-8 md:p-14">
        <div className="mb-10 text-center">
          <h2 className="text-[#1a3b50] text-4xl font-bold">Get In Touch</h2>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="First Name" className="w-full bg-white border border-gray-400 px-4 py-3.5 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-[#eb7342] transition-colors"/>
          <input type="email" placeholder="Email" className="w-full bg-white border border-gray-400 px-4 py-3.5 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-[#eb7342] transition-colors"/>
          <input type="tel" placeholder="Phone No." className="w-full bg-white border border-gray-400 px-4 py-3.5 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-[#eb7342] transition-colors"/>
          <input type="text" placeholder="Subject" className="w-full bg-white border border-gray-400 px-4 py-3.5 text-gray-600 placeholder-gray-400 focus:outline-none focus:border-[#eb7342] transition-colors"/>
          <textarea placeholder="Write comments" rows={5} className="w-full md:col-span-2 bg-white border border-gray-400 px-4 py-3.5 text-gray-600 placeholder-gray-400 resize-none focus:outline-none focus:border-[#eb7342] transition-colors"></textarea>
          <button type="submit" className="w-full md:col-span-2 bg-[#eb7342] hover:bg-[#d66536] text-white font-bold py-4 px-6 transition-colors mt-2 uppercase tracking-wide text-sm">Submit Now</button>
        </form>
      </div>
    </section>
    <div className={`w-[85%] lg:w-full overflow-hidden h-[450px] mb-[7px]`}>
      <div className="relative w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.7475460090136!2d49.81317337639031!3d40.370121771447124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc397d94dc3%3A0x617bc46b47244c00!2sAz%C9%99rbaycan%20Texniki%20Universiteti!5e0!3m2!1saz!2saz!4v1770714946278!5m2!1saz!2saz"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div></>);}