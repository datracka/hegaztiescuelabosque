import { css, tw } from "twind/css";

const bImage = css`
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
background: url("imgs/home-image-2.jpg") no-repeat center center fixed;
`;

const CallToAction = () => (
  <section
    className={tw(
      "container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover",
      bImage,
    )}
  >
    <div
      className={tw`p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl`}
    >
      Parralax inline
    </div>
  </section>
);
export default CallToAction;
