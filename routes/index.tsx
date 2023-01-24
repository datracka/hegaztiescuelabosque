import { HeadElement } from "@/components/HeadElement.tsx";
import { css, tw } from "twind/css";
import { PageProps } from "$fresh/server.ts";
import Header from "@/components/Header.tsx";
import Hero from "@/components/Hero.tsx";
import CallToAction from "@/components/Home/CallToAction.tsx";
import Description from "@/components/Home/Description.tsx";
import Services from "@/components/Services.tsx";
import Footer from "@/components/Footer.tsx";
import NavBar from "@/islands/NavBar.tsx";

const bImage = css`
    background-color: transparent;
    background-image: url("https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80");
`;

export default function Home(ctx: PageProps) {
  const { url } = ctx;
  return (
    <>
      <NavBar />
      <Hero text1="Creciendo en la naturaleza" text2="Hegazti Escuela Bosque" />
      <Description />

      <CallToAction />

      <section class="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img">
        <div class="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          Parralax inline
        </div>
      </section>
      <div class="max-w-lg m-auto">
        <p class="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          placerat a magna non varius. Proin leo felis, euismod non porta eget,
          varius sit amet sapien. Maecenas in nulla at leo convallis consectetur
          id a sapien. Nulla nec pulvinar nisi. Vivamus non facilisis lacus, et
          volutpat libero. Nulla ac odio aliquam, accumsan arcu ut, lacinia est.
          Nulla eu sem elit. Fusce nec laoreet sem, semper molestie libero.
        </p>
        <p class="mb-4">
          Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin,
          lectus et fringilla ultrices, dolor nisi scelerisque tortor, vel
          finibus magna massa non nunc. Phasellus massa quam, egestas a nisl
          sed, porta volutpat metus. Nunc sed elit ac tellus tempor cursus.
          Suspendisse potenti. Vestibulum varius rutrum nisl nec consequat.
          Suspendisse semper dignissim sem viverra semper. Nulla porttitor,
          purus nec accumsan pharetra, nisi dolor condimentum ipsum, id
          consequat nulla nunc in ligula.
        </p>
        <p class="mb-4">
          Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris
          porta dignissim hendrerit. Cras id velit varius, fermentum lectus
          vitae, ultricies dolor. In bibendum rhoncus purus vel rutrum. Nam
          vulputate imperdiet fringilla. Donec blandit libero massa. Suspendisse
          dictum diam mauris, vitae fermentum dolor tincidunt in. Pellentesque
          sollicitudin venenatis dolor, vitae scelerisque elit ultrices eu.
          Donec eget sodales risus, quis dignissim neque.
        </p>
      </div>
    </>
  );
}

/*
export default function Home(ctx: PageProps) {
  const { url } = ctx;
  return (
    <>
      <header
        className={tw(
          "flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover",
          bImage,
        )}
      >
        <div
          className={tw(
            "p-5 text-white bg-purple-300 bg-opacity-50 rounded-xl text-2xl",
          )}
        >
          Creciendo en la Naturaleza
        </div>
      </header>
      <header class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        <div class="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          Welcome to my site!
        </div>
      </header>

      <div className={tw`max-w-lg m-auto`}>
        <p class="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          placerat a magna non varius. Proin leo felis, euismod non porta eget,
          varius sit amet sapien. Maecenas in nulla at leo convallis consectetur
          id a sapien. Nulla nec pulvinar nisi. Vivamus non facilisis lacus, et
          volutpat libero. Nulla ac odio aliquam, accumsan arcu ut, lacinia est.
          Nulla eu sem elit. Fusce nec laoreet sem, semper molestie libero.
        </p>
        <p class="mb-4">
          Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin,
          lectus et fringilla ultrices, dolor nisi scelerisque tortor, vel
          finibus magna massa non nunc. Phasellus massa quam, egestas a nisl
          sed, porta volutpat metus. Nunc sed elit ac tellus tempor cursus.
          Suspendisse potenti. Vestibulum varius rutrum nisl nec consequat.
          Suspendisse semper dignissim sem viverra semper. Nulla porttitor,
          purus nec accumsan pharetra, nisi dolor condimentum ipsum, id
          consequat nulla nunc in ligula.
        </p>
        <p class="mb-12">
          Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris
          porta dignissim hendrerit. Cras id velit varius, fermentum lectus
          vitae, ultricies dolor. In bibendum rhoncus purus vel rutrum. Nam
          vulputate imperdiet fringilla. Donec blandit libero massa. Suspendisse
          dictum diam mauris, vitae fermentum dolor tincidunt in. Pellentesque
          sollicitudin venenatis dolor, vitae scelerisque elit ultrices eu.
          Donec eget sodales risus, quis dignissim neque.
        </p>
      </div>
      <section class="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img">
        <div class="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          Parralax inline
        </div>
      </section>
      <div class="max-w-lg m-auto">
        <p class="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          placerat a magna non varius. Proin leo felis, euismod non porta eget,
          varius sit amet sapien. Maecenas in nulla at leo convallis consectetur
          id a sapien. Nulla nec pulvinar nisi. Vivamus non facilisis lacus, et
          volutpat libero. Nulla ac odio aliquam, accumsan arcu ut, lacinia est.
          Nulla eu sem elit. Fusce nec laoreet sem, semper molestie libero.
        </p>
        <p class="mb-4">
          Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin,
          lectus et fringilla ultrices, dolor nisi scelerisque tortor, vel
          finibus magna massa non nunc. Phasellus massa quam, egestas a nisl
          sed, porta volutpat metus. Nunc sed elit ac tellus tempor cursus.
          Suspendisse potenti. Vestibulum varius rutrum nisl nec consequat.
          Suspendisse semper dignissim sem viverra semper. Nulla porttitor,
          purus nec accumsan pharetra, nisi dolor condimentum ipsum, id
          consequat nulla nunc in ligula.
        </p>
        <p class="mb-4">
          Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris
          porta dignissim hendrerit. Cras id velit varius, fermentum lectus
          vitae, ultricies dolor. In bibendum rhoncus purus vel rutrum. Nam
          vulputate imperdiet fringilla. Donec blandit libero massa. Suspendisse
          dictum diam mauris, vitae fermentum dolor tincidunt in. Pellentesque
          sollicitudin venenatis dolor, vitae scelerisque elit ultrices eu.
          Donec eget sodales risus, quis dignissim neque.
        </p>
      </div>
    </>
  );
}
 */
