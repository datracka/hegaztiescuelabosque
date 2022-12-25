import { tw } from "twind";

const Hero = () => (
  <div
    className={tw`hero min-h-screen`}
    style="background-image: url(https://placeimg.com/1000/800/arch);"
  >
    <div className={tw`hero-overlay bg-opacity-60`}></div>
    <div className={tw`hero-content text-center text-neutral-content`}>
      <div className={tw`max-w-md`}>
        <h1 className={tw`mb-5 text-5xl font-bold`}>Hello there</h1>
        <p className={tw`mb-5`}>
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button className={tw`btn btn-primary`}>Get Started</button>
      </div>
    </div>
  </div>
);
export default Hero;
