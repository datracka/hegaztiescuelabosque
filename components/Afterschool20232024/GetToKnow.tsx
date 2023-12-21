import { css, tw } from "twind/css";

type GetToKnowProps = {
  t: (t: string) => string;
};

const GetToKnow = ({ t }: GetToKnowProps) => (
  <section className={tw`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`}>
    <div class={tw`flex flex-row sm:flex-col gap-4`}>
      <div>
        <h2 class="hegazti-h2">
          {t("extracurricular20232024.title")}
        </h2>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: t("extracurricular20232024.text") }}
      />
      <img
        className="mb-12"
        src="/imgs/extraescolares-2023-2024/cartel.png"
        alt="hero"
      />
    </div>
  </section>
);

export default GetToKnow;
