import { css, tw } from "twind/css";
import { JSX } from "preact/jsx-runtime";
type HeroProps = {
  title: string;
  description: string;
  backgroundImage: string;
};

const Hero = (
  ctx: HeroProps,
): JSX.Element => (
  <section
    className={tw(
      "flex overflow-hidden	 items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover",
      css`background-image: url(${ctx.backgroundImage})`,
    )}
  >
    <div className="relative px-6 lg:px-8 ">
      <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-64 sm:pb-64 text-white">
        <div>
          <div>
            <h1 className="hegazti-h1">
              {ctx.title}
            </h1>
            <h2 className="hegazti-h3 sm:text-center mt-6">
              {ctx.description}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Hero;
