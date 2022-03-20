import { FaCog, FaLaptopCode } from "react-icons/fa";
import { AiFillPrinter } from "react-icons/ai";
import { MdOutlineAirplaneTicket } from "react-icons/md";
export default function Service() {
  const services = [
    {
      icon: <FaLaptopCode size={30} fill="white" />,
      title: "Web Development",
      description:
        "We develop responsive cross-platform personel and business website",
      bg: "bg-[#EA7A47]",
    },
    {
      icon: <FaCog size={30} fill="white" />,
      title: "Web Maintenance",
      description:
        "Apart from building, we also maintain or redesign the website.",
      bg: "bg-[#48A7FF]",
    },
    {
      icon: <AiFillPrinter size={30} fill="white" />,
      title: "Documentation",
      description:
        "Legal documentation processing service in Japanese Language.",
      bg: "bg-[#73CE95]",
    },
    {
      icon: <MdOutlineAirplaneTicket size={30} fill="white" />,
      title: "Ticketing",
      description: "Sales Domestic And Internation Ticket.",
      bg: "bg-[#F8BF17]",
    },
  ];
  return (
    <section name="service" className=" pt-20 pb-10 bg-[#fff5ed80]">
      <div className="px-8 md:max-w-7xl md:mx-auto">
        <div className="mb-[30px] md:max-w-xl md:mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-semibold">
            Grow your startup with our Service
          </h2>
          <p className="mt-[15px] text-sm md:text-base text-center leading-loose">
            Make your life easy and relax with our services. Zeus's all-in-one
            platform with amazing services
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:max-w-3xl xl:max-w-4xl md:mx-auto md:px-0 px-16 gap-8 xl:gap-10">
          {services.map((item, i) => (
            <div key={i} className="xl:flex">
              <div className="flex justify-center mb-4">
                <div
                  className={`w-[50px] h-[50px] rounded-xl flex justify-center items-center ${item.bg} lg:w-[80px] lg:h-[80px] lg:rounded-3xl border`}
                >
                  {item.icon}
                </div>
              </div>
              <div className="text-center xl:text-left xl:ml-4">
                <h3 className="text-[16px] lg:text-[20px] font-[700]">{item.title}</h3>
                <p className=" mt-3 xl:mt-1 text-sm lg:text-[16px]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
