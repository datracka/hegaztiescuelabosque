import NavBar from "@/islands/NavBar.tsx";
import { css, screen, tw } from "twind/css";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import Hero from "@/components/Shared/Hero.tsx";
import HeadElement from "@/components/HeadElement.tsx";
import { PageProps } from "$fresh/server.ts";

// PENDING TO TRANSLATE !!
export default function AulaExtraescolaresSabadoEnFamilia(props: PageProps) {
  const staticPath = "/imgs/aula-extraescolares-sabados-en-familia";
  return (
    <>
      <HeadElement
        description="La Escuela Bosque ofrece una experiencia en la naturaleza para familias con su programa 'Sábados en Familia'. Durante el segundo sábado de cada mes, se organizan actividades como juegos en familia, cuentos, vínculo con las yeguas, chocolatada y bizcochada. El horario es de 10:00 a 14:00 hrs. Los precios son 15 € por niño/a, 25€ por 2 niños/as, 35€ por 3 niños/as y la entrada para adultos es libre."
        title="Hegazti Escuela Bosque | Extraescolares - Sábados en familia"
        url={props.url}
      />
      <NavBar />
      <Hero
        title="SÁBADOS EN FAMILIA"
        description="Para vivir la naturaleza y la educación en familia."
        backgroundImage={`${staticPath}/hero-extraescolares-sabados-en-familia.jpg`}
      />
      <section
        className={tw(
          `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 `,
        )}
      >
        <p className={tw("mb-4")}>
          Nuestra Escuela Bosque abre espacio a experiencias en la naturaleza
          para familias.
        </p>
        <p className={tw("mb-4")}>
          El segundo sábado de cada mes Hegazti abre las puertas y organiza una
          jornada para familias en la naturaleza.
        </p>
        <h2 className={tw("text-3xl py-9 px-4 text-center border-y-1 my-8")}>
          HORARIO DE SÁBADOS EN FAMILIA De 10:00 a 14:00 hrs.
        </h2>
        <p className={tw("mb-4")}>
          con actividades como juego en familia en la naturaleza, cuentos
          creados, espcaio de vínculo con las yeguas, chocolatada y bizcochada,
          y alguna sorpresa más…. Os animamos a que nos contactéis para vivir la
          experiencia.
        </p>
        <h2 className={tw("text-3xl py-7 px-4 text-center border-t-1 my-4")}>
          PRECIOS
        </h2>
        <p className={tw("mb-8")}>
          Por niño/a: 15 €
          <br />
          <br />
          Por 2 niños/as: 25€
          <br />
          <br />
          Por 3 niños/as: 35€
          <br />
          <br />
          Adultos: ENTRADA LIBRE
        </p>
        <img
          src={`${staticPath}/saltando-en-charcos.jpg`}
          className={tw(
            "w-full mb-4 object-cover",
            css`aspect-ratio:16/5`,
            css`${screen("sm")} {aspect-ratio:16/3}`,
          )}
        />
        <p className={tw("mb-8 text-center")}>
          <a
            href="#"
            className={tw(
              "text-xs inline-block border-2 border-black p-4 hover:bg-black hover:text-white",
            )}
          >
            MÁS INFORMACIÓN
          </a>
        </p>
      </section>
      <SectionFooter />
    </>
  );
}
