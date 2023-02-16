import { css, screen, tw } from "twind/css";
import { JSX } from "preact/jsx-runtime";

type FaqProp = {
  question: string;
  img: string;
  children: JSX.Element | JSX.Element[];
};

const Faq = (faq: FaqProp) => (
  <div
    className={tw(
      `flex gap-4 flex-wrap border-b-1 pb-4 mb-8`,
    )}
  >
    <div
      className={tw`sm:w-[20%]`}
    >
      <div className={tw(``)}>
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
    <div className={tw`sm:w-[48%] sm:flex-grow`}>
      <h2 className={tw(`hegazti-h3 mb-4`)}>{faq.question}</h2>
      {faq.children}
    </div>
  </div>
);

export default Faq;
