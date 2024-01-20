import { css, screen, tw } from "twind/css";

const Prices = ({ t }: { t: any }) => {
  return (
    <section className={tw`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`}>
      <div class={tw`flex flex-col sm:flex-row gap-4`}>
        <div class={tw`flex-1`}>
          <h2 class={tw`hegazti-h2 pb-4`}>What is the school's price?</h2>
          <p>
            We are entirely self-financed and do not receive any public funding.
            As a result, we must charge a fee to cover the school's expenses.
            However, we understand that each family's situation is unique, and
            we are open to discussing rates, which may be adjusted based on
            individual circumstances. Additionally, opportunities for offsetting
            costs through community involvement or activities benefiting both
            the children and the school can be explored.
          </p>
        </div>
        <div
          className={tw(
            `flex-1 gap-4 flex-wrap pb-4 mb-8`,
          )}
        >
          <div className={tw`sm:flex-grow`}>
            <div>
              <p className={tw("mb-4")}>
                The price of the school is as follows:
              </p>.
              <p className={tw("mb-4")}>
                €350 per month, full-time (25 hours per week).
              </p>
              <p className={tw("mb-4")}>
                €250 per child, reduced rate (15 hours per week).
              </p>
              <p className={tw("mb-4")}>
                €150 per child, super reduced rate (10 hours per week).
              </p>
              <p className={tw("mb-4")}>
                And finally, for individual days: €20 per day.
              </p>
              <p className={tw("mb-4")}>
                Depending on each family's circumstances, we are open to
                discussing the rates, which can potentially be offset through
                community work or activities benefiting the children and the
                school.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
