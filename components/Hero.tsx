import { css } from "twind/css";
import { JSX } from "preact/jsx-runtime";
import { tw } from "twind";

type HeroProps = {
  text1: string;
  text2: string;
};

const bImage = css`
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background: url("https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80") no-repeat center center fixed;
`;

const Hero = (
  { text1 = "Lorem ipsum", text2 = "Lorem ipsum" }: HeroProps,
): JSX.Element => (
  <main className={tw(bImage)}>
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
  </main>
);
export default Hero;
