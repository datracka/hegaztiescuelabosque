import { css, tw } from "twind/css";
import { JSX } from "preact/jsx-runtime";
import SectionSaying from "@/components/Shared/SectionSaying.tsx";
type GridCellProps = {
  alt: string;
  img: string;
};

type ContentProps = {
  title: string;
  imgCaption: string;
  img: string;
  children: JSX.Element | JSX.Element[];
};

const SectionContent = (ctx: ContentProps) => (
  <section
    className={tw(
      `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-col gap-4`,
      `sm:flex-row sm:flex-wrap`,
    )}
  >
    <div
      className={tw`sm:w-[40%]`}
    >
      <div className={tw(`relative`)}>
        <img
          src={ctx.img}
          alt={ctx.imgCaption}
          className={tw("w-full mb-4 object-cover", css`aspect-ratio:1/1`)}
        />
        <div
          className={tw(
            `absolute text-3xl sm:text-2xl text-center w-10/12 text-white top-2/4	left-2/4	-translate-2/4`,
          )}
        >
          {ctx.imgCaption}
        </div>
      </div>
    </div>
    <div className={tw`sm:w-[48%] sm:flex-grow`}>
      <h2 className={tw(`hegazti-h2`)}>{ctx.title}</h2>
      {ctx.children}
    </div>
    <div className={tw`border-b-1 mb-8 sm:w-[48%] sm:flex-grow`}>
    </div>
  </section>
);

export default SectionContent;
