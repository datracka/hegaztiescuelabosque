import { css, tw } from "twind/css";

type CallToActionProps = {
  title: string;
  description?: string;
  image: string;
  buttonText: string;
  buttonLink: string;
};

const SectionCallToAction = (ctx: CallToActionProps) => (
  <section
    className={tw`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-between`}
  >
    <div
      className={tw(
        `flex relative overflow-hidden w-2/3`,
      )}
    >
      <a
        href={ctx.buttonLink}
      >
        <img
          className={tw(`w-full object-cover aspect-square`)}
          src={ctx.image}
        />

        <div
          class={tw(
            `absolute w-9/12 p-4 text-center text-white top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%]`,
          )}
        >
          <h3
            class={tw`text-4xl`}
            dangerouslySetInnerHTML={{ __html: ctx.title }}
          >
          </h3>
          <p class={tw`text-xs`}>{ctx.description}</p>
        </div>
      </a>
    </div>
    <div className={tw`mt-auto`}>
      <a
        href={ctx.buttonLink}
        className={tw`inline-block py-4 px-8 bg-[#697548] hover:text-white hover:bg-[#798558] text-center text-white`}
        dangerouslySetInnerHTML={{ __html: ctx.buttonText }}
      >
      </a>
    </div>
  </section>
);
export default SectionCallToAction;
