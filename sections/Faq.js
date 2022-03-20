import Accordian from "../components/Accordian";

export default function Faq() {
  return (
    <section name="faq" className="bg-[#F9FAFC] py-[80px]">
      <div className="px-8 lg:max-w-7xl lg:mx-auto">
        <div className="text-center mb-[48px]">
          <h3 className=" text-[#244886] text-sm xl:text-base tracking-wide font-medium">
            Get Your Question Answer
          </h3>
          <h2 className="text-2xl xl:text-3xl mt-2 font-medium">Frequently asked question</h2>
        </div>
        <div>
          <Accordian />
        </div>
      </div>
    </section>
  );
}
