import { Link as Scroll, animateScroll } from "react-scroll";
import { useState, useEffect } from "react";

export default function Header() {
  const menu = ["service", "faq", "contact us"];
  const [mobile, setMobile] = useState(false);
  const [offSetY, setOffSetY] = useState(0);
  const handleClick = () => {
    setMobile(!mobile);
  };
  const linkClick = () => {
    setMobile(false);
  };
  const scrollToTop = () => {
    animateScroll.scrollToTop();
    setMobile(false);
  };
  const handleScroll = () => {
    setOffSetY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  console.log(offSetY)

  return (
    <header
      className={`w-full fixed z-50 py-3 bg-white ${
        mobile ? "shadow-md" : ""
      } ${offSetY > 112 ? "shadow-md" : ""}`}
    >
      <div className="px-8 flex items-center justify-between flex-wrap lg:max-w-7xl lg:mx-auto">
        <h1
          className="text-2xl xl:text-4xl xl:font-medium font-serif font-semibold tracking-widest cursor-pointer"
          onClick={scrollToTop}
        >
          ZEUS
        </h1>
        <span
          className="w-8 h-8 flex items-center justify-end cursor-pointer md:hidden"
          onClick={handleClick}
        >
          {mobile ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </span>
        <ul
          className={`basis-full py-2 md:flex md:basis-auto md:space-y-0 md:space-x-4 md:items-center space-y-4 ${
            mobile ? "block" : "hidden"
          }`}
        >
          {menu.map((item, i) => (
            <li key={i}>
              <Scroll
                activeClass="active"
                to={item}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className=" capitalize text-lg font-light cursor-pointer"
                onClick={linkClick}
              >
                {item}
              </Scroll>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
