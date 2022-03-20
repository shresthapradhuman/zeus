export default function Accordian() {
  const faq = [
    {
      id: "question1",
      question: "How to contact us?",
      answer:
        "Go to contact section, there we have our contact information. Also you can send message from there",
      checked: true,
    },
    {
      id: "question2",
      question: "Where is your office in tokyo?",
      answer:
        "In our contact section we have our office address and contact number.",
      checked: false,
    },
  ];
  return (
    <>
      <div className="w-full mt-2">
        {faq.map((item, i) => (
          <div className="overflow-hidden shadow-sm py-5 px-1" key={i}>
            <label htmlFor={item.id}>
              {item.checked ? (
                <input
                  type="radio"
                  name="faq"
                  id={item.id}
                  className="peer inline-block absolute opacity-0"
                  checked
                />
              ) : (
                <input
                  type="radio"
                  name="faq"
                  id={item.id}
                  className="peer inline-block absolute opacity-0"
                />
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 xl:h-7 xl:w-7 xl:-mt-1 inline-block peer-checked:rotate-45 cursor-pointer"
                viewBox="0 0 20 20"
                fill="#3CCB9E"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="inline-block ml-2 font-medium xl:text-xl w-10/12 md:w-11/12 cursor-pointer">
                {item.question}
              </p>
              <div className="max-h-0 peer-checked:max-h-screen">
                <p className="py-4 px-8 text-gray-700 text-base font-normal">
                  {item.answer}
                </p>
              </div>
            </label>
          </div>
        ))}
      </div>
    </>
  );
}
