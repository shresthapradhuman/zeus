import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-[50px] px-8 bg-[#ffffff]">
      <div className="grid grid-cols-1 gap-8 md:max-w-7xl md:mx-auto">
        <div className="border py-4 md:py-0 rounded-md">
          <div className="mb-4 px-4 shadow-sm pb-4 ">
            <h2 name="contact us" className="text-2xl pt-4 pb-8 font-medium">
              Office Information
            </h2>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span className="font-medium">Address </span>
                <span className="text-sm">Tokyo, Japan</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Email</span>
                <span className="text-sm">support@domain.com</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Tel/Mobile</span>
                <span className="text-sm">+81 909999999</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Office Hour </span>
                <span className="text-sm">Monday~Friday (10AM~5PM)</span>
              </li>
            </ul>
          </div>
          <div className="mb-4 px-4">
            <h2 className="text-2xl pt-4 pb-8 font-medium">Contact Form</h2>
            <form>
              <div className="flex flex-col">
                <label htmlFor="name" className="text-xl capitalize pb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className=" bg-slate-100 py-2 px-2 mb-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-xl capitalize pb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className=" bg-slate-100 py-2 px-2 mb-2 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-xl capitalize pb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  cols="30"
                  rows="10"
                  class="bg-slate-100 py-2 px-2 mb-2 focus:outline-none"
                  spellcheck="false"
                ></textarea>
              </div>
              <button
                type="submit"
                class=" bg-teal-700 px-4 py-3 text-sm mt-2 text-white rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold font-serif tracking-widest">
            ZEUS
          </h2>
          <div className=" mt-4">
            <Link href="/">
              <a className=" capitalize pr-2 text-sm border-r-2 border-slate-600">
                Terms of use
              </a>
            </Link>
            <Link href="/">
              <a className="capitalize text-sm pl-2">Privacy</a>
            </Link>
          </div>
          <p className="text-sm mt-4 text-slate-600">
            @2022 All right are reserved. Designed By{" "}
            <Link href={"https://www.shresthapradhuman.com.np/"}>
              <a target="_blank" className="text-black">
                Shrestha Pradhuman
              </a>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
