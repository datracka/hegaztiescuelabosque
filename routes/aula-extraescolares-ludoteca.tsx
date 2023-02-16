import NavBar from "@/islands/NavBar.tsx";
import { css, tw } from "twind/css";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";

export default function AulaExtraescolaresLudoteca() {
  const staticPath = "/imgs/extracurricular-toy-library";
  return (
    <>
      <NavBar />
      <Hero
        title="EXTRAESCOLARES"
        description="Ludoteca"
        backgroundImage={`${staticPath}/hero-image.jpg`}
      />
      <section
        className={tw(
          `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 `,
        )}
      >
        <h2 className={tw(`hegazti-h2 py-14 px-4 text-center border-b-1 mb-8`)}>
          LUDOTECAS DE INVIERNO, PRIMAVERA Y VERANO
        </h2>
      </section>
      <section
        className={tw(
          `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-col gap-4`,
          `sm:flex-row sm:flex-wrap`,
        )}
      >
        <div
          className={tw`order-2 sm:order-1 sm:w-[48%] sm:flex-grow`}
        >
          <img
            src={`${staticPath}/img-1.jpg`}
            className={tw("w-full mb-4 object-cover", css`aspect-ratio:1/1`)}
          />
        </div>
        <div className={tw`order-1 sm:order-2 sm:w-[48%] sm:flex-grow`}>
          <h3 className={tw("hegazti-h3  mb-4 ")}>
            EXPERIMENTANDO LA NATURALEZA
          </h3>
          <p className={tw("mb-4")}>
            Nuestra Escuela Bosque se abre a otros niños/as de 3 a 12 años que
            quieran compartir nuestra preciosa escuela y tener esta experiencia
            en contacto con la naturaleza y los animales.
          </p>
          <p className={tw("mb-4")}>
            El horario que proponemos es de 9:00 a 14:00 hrs.
          </p>
          <p className={tw("mb-4")}>
            Y os animamos a que nos contactéis cuando lleguen las fechas para
            poder hacer vuestra reserva.
          </p>
          <p className={tw("mb-4")}>
            Os adelantamos algunas de las actividades que realizamos durente
            estas jornadas para que tengáis un poco más de información.
          </p>
          <p className={tw("mb-4")}>
            <a
              href="#"
              className={tw(
                "text-xs inline-block border-2 border-black p-4 hover:bg-black hover:text-white",
              )}
            >
              MÁS INFORMACIÓN
            </a>
          </p>
        </div>
      </section>
      <SectionFooter />
    </>
  );
}
