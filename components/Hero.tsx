import { css, tw } from "twind/css";
import { JSX } from "preact/jsx-runtime";
type HeroProps = {
  text1: string;
  text2: string;
};

const bImage = css`
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background: url("imgs/home-image-1.jpg") no-repeat center center fixed;
`;

const Hero = (
  { text1 = "Lorem ipsum", text2 = "Lorem ipsum" }: HeroProps,
): JSX.Element => (
  <header
    className={tw(
      "flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover",
      bImage,
    )}
  >
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-64 sm:pb-64 text-white">
        <div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
              {text1}
            </h1>
            <p className="mt-6 text-lg leading-8 sm:text-center text-white">
              {text2}
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
);
export default Hero;

{
  /* <main className={tw(bImage)}>
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-64 sm:pb-64">
        <div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
              {text1}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
              {text2}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main> */
}
