import { css, tw } from "twind/css";
import NavBar from "@/islands/NavBar.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import { Head } from "$fresh/runtime.ts";
import Hero from "@/components/Shared/Hero.tsx";
import SectionContent from "@/components/WhoWeAreDayInHegazti/SectionContent.tsx";

export default function QuienesSomosHegazti() {
  const staticPath = "/imgs/who-we-are-day-in-hegazti";
  return (
    <>
      <Head>
        <title>
          Hegazti Escuela Bosque | Quienes Somos - Naturaleza y espacios
        </title>
        <meta
          name="description"
          content="La Escuela Bosque Hegazti es un lugar especializado en educación infantil, con cuatro áreas diferenciadas por edad, cada una con una dinámica diferente en la que los niños aprenden jugando en contacto con la naturaleza. El enfoque principal es el aprendizaje basado en proyectos y las actividades al aire libre en un entorno natural, ofreciendo a los niños la oportunidad de explorar y descubrir el mundo a través de su propia curiosidad."
        />
      </Head>
      <NavBar />
      <Hero
        title="UN DIA EN HEGAZTI"
        description=""
        backgroundImage={`${staticPath}/hero-image.jpg`}
      />

      <section
        className={tw(
          `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`,
        )}
      >
        <p className={tw(`mx-auto max-w-[75%] border-b-1 px-16 py-8 mb-8`)}>
          <strong>Escuela Bosque Hegazti</strong>{" "}
          tiene cuatro espacios diferenciados por edad y por lo tanto cuatro
          dinámicas diferentes en cuanto a la experiencia del día a día.
        </p>
      </section>
      <SectionContent
        title="Un día en la Casita Abejorro (0 a 3 años)"
        imgCaption="Casita Abejorro"
        img={`${staticPath}/img-1.jpg`}
      >
        <p className={tw("mb-4")}>
          La Casita Abejorro es un espacio cálido, de calma, respeto, cuidado,
          confianza y seguridad.
        </p>
        <p className={tw("mb-4")}>
          Los/as abejorros llegan, y el primer espacio sería de bienvenida,
          contacto y conexión con cada persona.
        </p>
        <p className={tw("mb-4")}>
          El sigueinte momento es libre movimiento por el espacio interior o si
          es oportuno por el es`pacio exterior, aquí nos centramos en seguir sus
          ritmos y facilitar el movimiento espontáneo además de acompañarles en
          la exploración de los materiales.
        </p>
        <p className={tw("mb-4")}>
          El último espacio sería el momento de la lectura, el cuento y la
          relajación para cerrar la mañana.
        </p>
      </SectionContent>
      <SectionContent
        title="Un día en la Casita del Bosque (3 a 6 años)"
        imgCaption="Casita del Bosque"
        img={`${staticPath}/img-2.jpg`}
      >
        <p className={tw("mb-4")}>
          La casita del Bosque en el día a día es un espacio confortable.
        </p>
        <p className={tw("mb-4")}>
          En el inicio del día está nuestro espacio de encuentro, donde todas y
          todos podemos tener nuestra bienvenida y nuestro tiempo para compartir
          nuestros sentires y organizar nuestro día.
        </p>
        <p className={tw("mb-4")}>
          Preparamos lo necesario y salimos a nuestro Camino de Aprendizaje, con
          nuestras, lupas, cestas, cuerdas o lo que sea que necesitamos hoy….
        </p>
        <p className={tw("mb-4")}>
          Cuando llegamos a nuestro lugar elegido en el día de hoy almorzamos en
          nuestras cabañas, jugamos a lo que imaginamos, ponemos nuestras
          reglas, nos divertimos, a veces nos pasan cosas y también las
          arreglamos.
        </p>
        <p className={tw("mb-4")}>
          Aquí en este espacio del bosque hacemos nuestra actividad del día a
          veces recolectamos, a veces investigamos, otras construimos, en
          ocasiones descubrimos…
        </p>
        <p className={tw("mb-4")}>
          Volvemos a la Escuela cargadas/os de energía, de sol de lluvia, de
          barro, a veces de palos, piñas, hojas, plumas, o lo que hayamos
          encontrado…
        </p>
        <p className={tw("mb-4")}>
          Tenemos en la Yurta nuestros materiales de arte, cada una/o elige que
          hacer….
        </p>
        <p className={tw("mb-4")}>
          Y nuestra mañana se cierra con nuestro espacio de cuento que creamos
          entre todas/os o a veces cada uno/a cuenta su propio cuento del día…
        </p>
        <p className={tw("mb-4")}>
          Los viernes son un día especial en la escuela hacemos tareas, cuidamos
          de los animales que viven con nosotras/os, recogemos huevos, plantas,
          cuidamos y trabajamos el huerto, hacemos jabón, limpiamos el espacio,
          a veces salimos con cestas a recoger la basura del bosque o paseamos
          con las yeguas.
        </p>
      </SectionContent>
      <SectionContent
        title="Un día en la Casita del Árbol (6 a 9 años)"
        imgCaption="Casita del Árbol"
        img={`${staticPath}/img-3.jpg`}
      >
        <p className={tw("mb-4")}>
          En la Casita de Árbol se aprenden muchas cosas.
        </p>
        <p className={tw("mb-4")}>
          En el comienzo del día nos encontramos, compartimos cómo llegamos, qué
          vamos a hacer en el día de hoy tomamos decisiones, hacemos acuerdos.
        </p>
        <p className={tw("mb-4")}>
          Hacemos la actividad de concentración dentro de la escuela, cada día
          tenemos una diferente a veces la hacemos juntos y otras cada uno/a
          tiene una actividad diferente.
        </p>
        <p className={tw("mb-4")}>
          Salimos a fuera a jugar en la naturaleza y a hacer nuestro almuerzo.
        </p>
        <p className={tw("mb-4")}>
          Cogemos las mochilas de exploradores y vamos al lugar del día
          caminando, durante el camino encontramos muchas cosas curiosas que nos
          interesan y que nos generan preguntas…
        </p>
        <p className={tw("mb-4")}>
          Cuando regresamos tenemos nuestro espacio de lectura, arte, o
          manualidades…
        </p>
        <p className={tw("mb-4")}>
          Y por último nos reunimos para compartir cómo ha ido el día que cosas
          nos han interesado, como podríamos saber aquello que nos preguntamos,
          resolver preguntas, inquietudes, acordamos que tarea tiene cada una/o
          de que nos vamos a ocupar para resolver estas dudas.
        </p>
        <p className={tw("mb-4")}>
          En la escuela los lunes y los viernes hacemos tareas, cuidamos de los
          animales que viven con nosotras/os, recogemos huevos, plantas,
          cuidamos y trabajamos el huerto, hacemos jabón, limpiamos el espacio,
          a veces salimos con cestas a recoger la basura del bosque o paseamos
          con las yeguas. Y además coicidimos con los demás compañeros de la
          escuela.
        </p>
      </SectionContent>
      <SectionContent
        title="Un día en el Nido del Pájaro (9 a 12 años)"
        imgCaption="Nido del Pájaro"
        img={`${staticPath}/img-4.jpg`}
      >
        <p className={tw("mb-4")}>
          El Nido del pájaro es un lugar donde nos preparamos para volar.
        </p>
        <p className={tw("mb-4")}>
          En la llegada nos recibimos, nos encontramos y compartimos sentires,
          intereses, sueños y curiosidades. También hacemos nuestra elección del
          proyecto del día.
        </p>
        <p className={tw("mb-4")}>
          Tenemos espacio para preparar aquello que necesitamos para nuestro
          proyecto de hoy, a veces nuestro poryecto dura semanas….depende de
          cuanto nos interese. Planificamos, organizamos, hacemos acopio de
          material, hacemos previsiones, y cuando estamos preparadas/os salimos
          a fuera.
        </p>
        <p className={tw("mb-4")}>
          Ahora nos toca poner en práctica o realizar aquello que hemos
          decidido, anotar también lo que hemos creido oportuno o lo que de
          repente se nos ocurre, a veces nos sale como esperábamos y en otras
          ocasiones nada sale como penábamos….cuando terminamos por hoy volvemos
          dentro.
        </p>
        <p className={tw("mb-4")}>
          Nuestros espacios de juego libre, de disfrute, conversación, calma o
          lectura, los acordamos cada día y cada día suelen ser distintos
          depende del proyecto que tengamos.
        </p>
        <p className={tw("mb-4")}>
          Aquí anotamos, hacemos reformulaciones, preguntas, vemos lo que
          necesitamos, lo que ha fallado, analizamos variables, y acordamos como
          continuar o cómo cerrar y dejar constancia de nuestros resultados.
        </p>
        <p className={tw("mb-4")}>
          Tenemos nuestro espacio libre de arte, o taller el que elijamos…
        </p>
        <p className={tw("mb-4")}>
          Durante la semana tenemos responsabilidades o tarea en la escuela lo
          hacemos al final de la mañana, puede ser, cuidar de los animales,
          trabajar en el huerto, ayudar con las tareas de mantenimiento…
        </p>
        <p className={tw("mb-4")}>
          Los viernes son un día especial elegimos que cosas queremos aprender
          fuera de la escuela, y ese día vamos a compartir con otras personas en
          sus oficios un espacio de aprendizaje-trabajo.
        </p>
      </SectionContent>
      <SectionFooter />
    </>
  );
}
