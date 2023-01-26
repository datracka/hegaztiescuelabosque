import { css, tw } from "twind/css";

type SectionSayingProps = {
  text: string;
  author: string;
};

const SectionSaying = (ctx: SectionSayingProps) => (
  <section className={tw`mx-auto max-w-xs py-14`}>
    <div class={tw`text-center`}>
      <p class={tw`text-3xl whitespace-pre-wrap`}>&ldquo;{ctx.text}&rdquo;</p>
      <p class={tw(`text-sm pt-5 text-gray-500`)}>— {ctx.author}</p>
    </div>
  </section>
);

export default SectionSaying;
