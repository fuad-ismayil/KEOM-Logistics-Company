export default function NewsletterArea() {
  return (
    <section className="w-full">
      <div className="mx-[24px] xl:mx-auto max-w-[1320px] bg-[#FF7D44] px-[30px] py-[50px] md:px-[60px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-8 md:gap-x-10">
          <div className="w-full md:w-5/12 text-center md:text-left">
            <h2 className="text-white font-bold text-[36px] leading-[1.1] mx-auto md:mx-0 max-w-[15ch] md:max-w-none">Get daily feed & updates</h2>
          </div>
          <div className="w-full md:w-7/12">
            <form action="#" method="post" className="w-full">
              <div className="flex flex-col xl:flex-row items-center gap-[15px] w-full">
                <input type="text" name="name" placeholder="Full Name..." required className="h-[56px] w-full xl:w-[258px] border border-white bg-white px-[20px] text-[15px] text-[#030c26] outline-none placeholder:text-[#9aa3aa]"/>
                <input type="email" name="email" placeholder="Email Address..." required className="h-[56px] w-full xl:w-[257px] border border-white bg-white px-[20px] text-[15px] text-[#030c26] outline-none placeholder:text-[#9aa3aa]"/>
                <button type="submit" className="h-[56px] w-full xl:w-[166px] bg-[#002832] text-white text-[15px] font-bold uppercase tracking-[0.02em] hover:bg-black transition-colors">
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>);}