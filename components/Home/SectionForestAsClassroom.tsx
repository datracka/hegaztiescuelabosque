import { css, tw } from "twind/css";

// deno-lint-ignore no-explicit-any
const SectionForestAsClassroom = ({ t }: { t: any }) => (
  <section className={tw`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-10`}>
    <div class={tw`flex flex-col sm:flex-row gap-4`}>
      <div>
        <h2 class={tw`hegazti-h2`}>{t("home.forestAsClassroom.title")}</h2>
        <p>
          {t("home.forestAsClassroom.keys")}
        </p>
      </div>
      <div
        class={tw`pb-12 text-justify`}
        dangerouslySetInnerHTML={{ __html: t("home.forestAsClassroom.text") }}
      >
      </div>
    </div>
  </section>
);

export default SectionForestAsClassroom;
