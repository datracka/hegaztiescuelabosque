import { css, screen, tw } from "twind/css";
import { JSX } from "preact/jsx-runtime";

type FaqProp = {
  question: string;
  answer: string;
  img: string;
};

const Faq = (faq: FaqProp) => {
  const textBlockClass = tw`sm:w-[48%] sm:flex-grow`;
  return (
    <div
      className={tw(
        `flex gap-4 flex-wrap border-b-1 pb-4 mb-8`,
      )}
    >
      <div
        className={tw`sm:w-[20%]`}
      >
        <div>
          <img
            src={faq.img}
            alt={faq.question}
            className={tw(
              "w-full object-cover",
              css`aspect-ratio:16/7`,
              css`${screen("sm")} {aspect-ratio:1/1}`,
            )}
          />
        </div>
      </div>
      <div className={textBlockClass}>
        <h2 className={tw(`hegazti-h3 mb-4`)}>{faq.question}</h2>
        <div dangerouslySetInnerHTML={{ __html: faq.answer }}></div>
      </div>
    </div>
  );
};

export default Faq;
