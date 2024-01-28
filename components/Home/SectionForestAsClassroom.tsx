import { tw } from "twind/css";

type SectionForestAsClassroomProps = {
  title: string;
  keys: string;
  text: string;
};

// deno-lint-ignore no-explicit-any
const SectionForestAsClassroom = (section: SectionForestAsClassroomProps) => (
  <section className={tw`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-10`}>
    <div class={tw`flex flex-col sm:flex-row gap-4`}>
      <div>
        <h2 class={tw`hegazti-h2`}>{section.title}</h2>
        <p>
          {section.keys}
        </p>
      </div>
      <div
        class={tw`pb-12 text-justify`}
        dangerouslySetInnerHTML={{ __html: section.text }}
      >
      </div>
    </div>
  </section>
);

export default SectionForestAsClassroom;
