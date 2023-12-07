import { tw } from "twind/css";

const SectionLearnInNature = ({ t }: { t: any }) => (
  <section className={tw`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`}>
    <div class={tw`flex flex-col sm:flex-row gap-4`}>
      <div>
        <h2 class={tw`hegazti-h2`}>
          {t("home.presentation.learnInNatureHeader")}
        </h2>
      </div>
      <div
        className={tw`pb-12 text-justify`}
        dangerouslySetInnerHTML={{
          __html: t("home.presentation.learnInNatureBody"),
        }}
      >
      </div>
    </div>
  </section>
);

export default SectionLearnInNature;
