import NavBar from "@/islands/NavBar.tsx";
import { css, tw } from "twind/css";
import SectionCardList from "@/components/Shared/SectionCardList.tsx";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";
import { Head } from "$fresh/runtime.ts";
import Hero from "@/components/Shared/Hero.tsx";

export default function QuienesSomosProyecto() {
  const staticPath = "/imgs/who-we-are-project";
  return (
    <>
      <Head>
        <title>
          Hegazti Escuela Bosque | Quienes Somos - Proyecto
        </title>
        <meta
          name="description"
          content="Los principios fundamentales de la Escuela se centran en la convivencia diaria con la naturaleza y el aprendizaje experiencial. La escuela fomenta el juego libre, el vínculo emocional, el acompañamiento emocional, la comunicación no violenta, la convivencia y el movimiento libre como medios para desarrollar la creatividad, la imaginación, la autonomía y la autosuficiencia en los niños. La escuela también promueve valores solidarios y el cuidado de los demás."
        />
      </Head>
      <NavBar />
      <Hero
        title="NUESTRO PROYECTO"
        description="Quienes somos - Proyecto"
        backgroundImage={`${staticPath}/hero-quienes-somos-proyecto.jpg`}
      />
      <section
        className={tw(
          `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 `,
        )}
      >
        <h2 className={tw(`hegazti-h2  py-14 px-4 text-center mb-8`)}>
          PRINCIPIOS DE LA ESCUELA
        </h2>
      </section>
      <SectionCardList
        list={[
          {
            title: `Convivenica diaria con la naturaleza`,
            description:
              `La conexión con el medio natural permite a los niños desarrollarse de forma orgánica en armonía con el contexto. Se construyen aprendizajes funcionales, de autonomía y autosuficiencia. Activa el sistema inmunitario. Es un medio inspirador e integrador. Y el aula más grande y creativa, donde se despierta el interés y la inquietud por saber. La naturaleza equilibra el sistema nervioso, y transmite un ritmo tranquilo.  Estar en convivencia desde la infancia establece vínculos emocionales con ella, y con el respeto y el cuidado por ella.`,
            img: `${staticPath}/convicencia-diaria-con-la-naturaleza.jpg`,
          },
          {
            title: `Vicencialismo`,
            description:
              `El aprendizaje se integra cuando experimentamos. Es una forma holística y orgánica donde las personas están involucradas en su propio proceso a todos los niveles. Y esto genera inquietud por investigar y por descubrir. `,
            img: `${staticPath}/vicenvialismo.jpg`,
          },
          {
            title: `Juego libre`,
            description:
              `actividad intrínseca del ser humano, al igual que en el reino animal, mediante la que aprende conductas grupales, destrezas, valores y conocimiento. Desarrolla la autodeterminación, la creatividad, la imaginación la capacidad de elección. Elaboran procesos propios con reglas, principios, finales, materilaes….`,
            img: `${staticPath}/juego-libre.jpg`,
          },
          {
            title: `Vínculo emocional`,
            description:
              `Cuidamos el clima, y el ambiente para hacer del espacio un lugar seguro calmado donde puedan sentirse seguros/as. Base principal de la escuela para que la exploración suceda.`,
            img: `${staticPath}/vinculo.jpg`,
          },
          {
            title: `Acompañamiento emocional y respetuoso`,
            description:
              `Acompañamos la vivencia emocional de los enfantes desde la presencia activa, no directiva, reflejando al otro lo que comprendemos de su experiencia emocional, dejando en sus manos completamente la vivencia de la emoción, mostrando nuestra compañía y comprensión, sin tratar de apropiarnos de la emoción o intentar gestionársela.`,
            img: `${staticPath}/acompanamiento-emocional-y-respetuoso.jpg`,
          },
          {
            title: `Comunicación no violenta`,
            description:
              `Practicamos diariamente una comunicación describiendo los acontecimientos sin juicios de valor ni adjetivos. Tratando de identificar en los conflictos cual es la necesidad de cada uno. Y concretando cual es la petición. `,
            img: `${staticPath}/comunicacion-no-violenta.jpg`,
          },
          {
            title: `interedad`,
            description:
              `Mezclamos grupos de edad de la siguiente manera 0 a 3, 3 a 6, 6 a 9, 9 a 12 años. La finalidad de las agrupaciones es respetar los tiempos en los procesos, y contribuir en las experiencias que ofrecen las diferentes edades.`,
            img: `${staticPath}/interedad.jpg`,
          },
          {
            title: `Movimiento libre`,
            description:
              `Los retos físicos permiten al niño descubrir su propio cuerpo y ser consciente de sus posibilidades. Una forma en la que acompañamos es que se muevan libremente sin interferencias, como colocarlos en posiciones que no puede llegar por sí mismo, o adelantar procesos a los que   pueden llegar de forma autónoma. Acompañamos a que se desarrollen y aprendan de forma libre y autónoma, guiándose por sus intereses y motivaciones.`,
            img: `${staticPath}/movimiento-libre.jpg`,
          },
          {
            title: `Valores solidarios`,
            description:
              `Fomentamos la toma de conciencia de las necesidades de todos, de la necesidad de cuidarnos, y cuidar a otros para  contribuir a que estos valores sean parte del día a día de la escuela.`,
            img: `${staticPath}/valores-solidarios.jpg`,
          },
        ]}
      />
      <SectionFooter />
    </>
  );
}
