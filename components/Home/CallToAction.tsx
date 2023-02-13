import { css, tw } from "twind/css";

type callToActionProps = {
  title: string;
  backgroundImage: string;
  buttonText: string;
  buttonLink: string;
};

const CallToAction = (ctx: callToActionProps) => (
  <section
    className={tw(
      "flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover bg-no-repeat",
      css`background-image: url(${ctx.backgroundImage})`,
    )}
  >
    <div
      className={tw`flex flex-col items-center p-5 text-white`}
    >
      <h2 class={tw("hegazti-h2 text-center")}>{ctx.title}</h2>
      <a
        href={ctx.buttonLink}
        class={tw(
          "bg-transparent mt-8 py-4 px-8 border border-white-500 rounded",
          "hover:bg-white-500 hover:border-transparent",
        )}
      >
        {ctx.buttonText}
      </a>
    </div>
  </section>
);
export default CallToAction;
