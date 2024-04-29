import { css, tw } from "twind/css";

type GetToKnowProps = {
  text: string;
  title: string;
};

const GetToKnow = ({ title, text }: GetToKnowProps) => (
  <section className={tw`mx-auto max-w-7xl px-6 pb-8 sm:px-6 lg:px-8`}>
    <h2 className={tw(`hegazti-h2  py-14 px-4 text-center mb-8`)}>{title}</h2>
    <div
      dangerouslySetInnerHTML={{ __html: text }}
    />
    <br />
    <br />
    <img className={tw`mb-12`} src="/imgs/ludoteca-verano/cartel.jpeg" />
  </section>
);

export default GetToKnow;
