import { Link } from "react-scroll";
export default function Hero() {
  return (
    <section className="pt-28 pb-14 lg:pb-0">
      <div className="px-8 lg:max-w-7xl lg:mx-auto">
        <div className=" mb-8 sm:max-w-xl sm:mx-auto">
          <h2 className=" text-center text-4xl xl:text-5xl xl:leading-tight font-medium leading-snug">
            Creativity starts with viewing the whole world differently
          </h2>
          <p className="text-center mt-4 text-sm xl:text-base">
            A service agency with customer satisfaction
          </p>
        </div>
        <div className="relative">
          <div className="flex justify-center lg:absolute md:w-full">
            <Link
              activeClass="active"
              to="contact us"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <button className="bg-[#0a8080] min-h-[50px] px-[25px] md:px-[35px] rounded-[4px] font-[700] text-[14px] xl:text-base text-white tracking-wider hover:bg-[#10132d]">
                Contact Us
              </button>
            </Link>
          </div>
          <figure className="lg:block hidden">
            <img
              src="/images/hero.png"
              alt="heroimage"
              className="w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
