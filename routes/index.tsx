import { HeadElement } from "@/components/HeadElement.tsx";
import { css, tw } from "twind/css";
import { PageProps } from "$fresh/server.ts";
import Header from "@/components/Header.tsx";
import Hero from "@/components/Hero.tsx";
import CallToAction from "@/components/Home/CallToAction.tsx";
import SectionLearnInNature from "@/components/Home/SectionLearnInNature.tsx";
import SectionForestAsClassroom from "@/components/Home/SectionForestAsClassroom.tsx";
import SectionSaying from "@/components/Home/SectionSaying.tsx";
import Services from "@/components/Services.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import NavBar from "@/islands/NavBar.tsx";
import SectionGallery from "@/components/Home/SectionGallery.tsx";
import SectionExtracurricular from "@/components/Home/SectionExtracurricular.tsx";

const bImage = css`
    background-color: transparent;
    background-image: url("https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80");
`;

export default function Home(ctx: PageProps) {
  const { url } = ctx;
  return (
    <>
      <NavBar />
      <Hero
        title="Creciendo en la naturaleza"
        description="Hegazti Escuela Bosque"
        backgroundImage="imgs/home/home-image-1.jpg"
      />
      <SectionLearnInNature />
      <CallToAction
        title="MATRÍCULAS ABIERTAS"
        backgroundImage="imgs/home/home-image-2.jpg"
        buttonText="MÁS INFO"
        buttonLink="#"
      />
      <SectionForestAsClassroom />
      <SectionGallery
        list={[{
          title: "PASEOS POR EL MONTE",
          description: "TODOS LOS DIAS",
          image: "imgs/home/home-gallery-item-01.jpg",
        }, {
          title: "ELEMENTOS NATURALES",
          description: "DESPERTANDO LA CURIOSIDAD",
          image: "imgs/home/home-gallery-item-02.jpg",
        }, {
          title: "CONSTRUYENDO JUNTOS",
          description: "TRABAJO EN EQUIPO",
          image: "imgs/home/home-gallery-item-03.jpg",
        }, {
          title: "OBSERVACIÓN",
          description: "SEGUIENDO LOS CICLOS",
          image: "imgs/home/home-gallery-item-04.jpg",
        }, {
          title: "JUEGO LIBRE",
          description: "SIGUIENDO EL IMPULSO",
          image: "imgs/home/home-gallery-item-05.jpg",
        }, {
          title: "CUIDANDO DE LOS CABALLOS",
          description: "RESPONSABILIDAD Y EMPATÍA",
          image: "imgs/home/home-gallery-item-06.jpg",
        }]}
      />
      <SectionSaying
        text="Dímelo y lo olvido. Enseñame y lo recuerdo. Involúcrame y lo aprendo."
        author="Benjamin Franklin"
      />
      <SectionExtracurricular />
      <SectionFooter />
    </>
  );
}
