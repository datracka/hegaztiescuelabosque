import { css, screen, tw } from "twind/css";

const Prices = ({ t }: { t: any }) => {
  return (
    <section className={tw`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`}>
      <div class={tw`flex flex-col sm:flex-row gap-8`}>
        <div class={tw`flex-1`}>
          <h2 class={tw`hegazti-h2 pb-4`}>
            {t("home.prices.title")}
          </h2>
          <p>
            {t("home.prices.description")}
          </p>
        </div>
        <div
          className={tw(
            `flex-1 gap-4 flex-wrap pb-4 mb-8`,
          )}
        >
          <div className={tw`sm:flex-grow`}>
            <div>
              <p className={tw("mb-4 font-bold")}>
                {t("home.prices.rates.title")}
              </p>
              <p className={tw("mb-4")}>
                - {t("home.prices.rates.fullTime")}
              </p>
              <p className={tw("mb-4")}>
                - {t("home.prices.rates.reduced")}
              </p>
              <p className={tw("mb-4")}>
                - {t("home.prices.rates.superReduced")}
              </p>
              <p className={tw("mb-4")}>
                - {t("home.prices.rates.daily")}
              </p>
              <p className={tw("mb-4")}>
                {t("home.prices.rates.flexible")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
