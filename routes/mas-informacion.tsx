import { css, tw } from "twind/css";
import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";

export default function MasInformacion() {
  return (
    <>
      <NavBar />
      <section
        className={tw(
          `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`,
        )}
      >
        <h1 className={tw(`text-3xl py-8`)}>
          Más Información
        </h1>

        <p className={tw(`mb-4`)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
          ultrices elit. Sed ac congue urna. Donec viverra mi tortor, vitae
          vestibulum turpis pharetra ac. Donec pulvinar odio lorem. Aliquam
          tempor non massa in semper. Donec eget tellus et mauris faucibus
          venenatis vitae sed neque. Quisque semper massa arcu, a ultricies urna
          rutrum eu. Quisque mauris ante, sodales placerat gravida non,
          hendrerit sed leo. Mauris malesuada lacinia ante, et volutpat ante
          ultrices ut.
        </p>
      </section>
      <SectionFooter />
    </>
  );
}
