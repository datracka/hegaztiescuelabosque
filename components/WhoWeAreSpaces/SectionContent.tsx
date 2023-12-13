import { css, tw } from "twind/css";
import SectionSaying from "@/components/Shared/SectionSaying.tsx";
type GridCellProps = {
  alt: string;
  img: string;
};

type ContentProps = {
  staticPath: string;
};

const SectionContent = ({ staticPath }: ContentProps) => {
  return (
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
          title="Niño con caracola"
          src={`${staticPath}/nino-con-caracola.jpg`}
          className={tw("w-full mb-4 object-cover", css`aspect-ratio:1/1`)}
        />
        <SectionSaying
          text="Hay un libro abierto siempre para todos los ojos: la naturaleza."
          author="JEAN-JACQUES"
        />
        <img
          title="Manos conjuntas"
          src={`${staticPath}/manos-conjuntas.jpg`}
          className={tw("w-full object-cover", css`aspect-ratio:1/1`)}
        />
      </div>
      <div className={tw`order-1 sm:w-[48%] sm:flex-grow`}>
        <h2 className={tw(`hegazti-h2 `)}>¿POR QUÉ EN LA NATURALEZA?</h2>
        <p className={tw("mb-4")}>
          La infancia temprana es especialmente sensible a la naturaleza, pues
          los niños se identifican con ella de una manera holística, integrada,
          se sienten parte de ella. Nada les produce tanto placer como estar
          fuera y poder zambullirse con todos los sentidos en lo que la
          naturaleza les ofrece. La naturaleza ofrece espacios de calidad para
          el movimiento y la percepción sensorial, difíciles de reproducir en
          otro tipo de emplazamientos. Aunque no es necesario buscar escenarios
          grandiosos, pues el interés de los niños a estas edades está en la
          escala micro, en lo que tiene lugar al alcance de su mano, es
          importante proveerles de un espacio natural lo menos manipulado
          posible. El contacto frecuente o casi permanente con la naturaleza,
          como es el caso aquí al estar a diario en el monte, genera un sentido
          de identidad y pertenencia a ella que es difícil de conseguir con
          visitas esporádicas. Ello se traduce de manera casi inmediata en
          actitudes y comportamientos de respeto al entorno, casi sin necesidad
          de explicación o mediación por parte del adulto.
        </p>
        <p className={tw("mb-4")}>
          Además, ese contacto prolongado y habitual con la naturaleza provee a
          los niños de experiencias sensoriales intensas, profundas y
          gratificantes a la larga. La información que les llega a través de
          todos los sentidos es coherente, consistente y llena de matices y
          sutilezas, imprescindible a la hora de integrar la información en el
          cerebro. Todo ello permite un mayor autoconocimiento de su cuerpo y lo
          que éste les permite hacer. Los infinitos matices de formas, colores,
          tamaños y materiales, hace que los niños se hagan más sensibles a la
          belleza y se sientan en armonía con el entorno y consigo mismos. El
          espacio amplio y abierto les permite expandirse física y mentalmente,
          sentirse libres; pueden desarrollar su juego sin interferir los unos
          con los otros y en un escenario con múltiples ambientes, estructuras,
          materiales y retos de diferente nivel y características. La
          permanencia al aire libre, en un entorno por definición cambiante,
          hace que estén más alerta, tengan una mayor capacidad de observación y
          concentración, y sean más flexibles consigo mismos y con los demás que
          cuando están en el aula. Por esta misma razón, mejoran en el
          reconocimiento de las necesidades propias y ajenas. Los ritmos del
          mundo natural, en general más pausados que los que impone nuestra
          sociedad, permiten desarrollar la paciencia, les aportan serenidad y
          contribuyen al encuentro con su espiritualidad.
        </p>
        <p className={tw("mb-4")}>
          Por otro lado, el juego en la naturaleza, con su terreno irregular, y
          el manejo de los materiales que allí se encuentran estimula su
          curiosidad, su imaginación, su creatividad, su lenguaje y, sobre todo,
          su motricidad, tanto gruesa como fina. El hecho de tener que fabricar,
          modelar o definir sus propios juguetes crea la necesidad de usar el
          lenguaje para ello, enriqueciendo enormemente su capacidad descriptiva
          y la fantasía. Los desafíos físicos y sensoriales que encuentran en
          ese medio fomentan su autonomía, independencia y capacidad de
          cooperación, de negociación, de razonamiento y de decisión, pues son
          los propios niños quienes estiman su propia capacidad de enfrentarse a
          ellos y valoran los resultados de sus intentos. El entorno natural
          presenta además situaciones de riesgo variable, que los acompañantes
          procuran controlar, pero no eliminar. El riesgo que allí afrontan
          contribuye a aprender a evaluarlos de forma más realista, al
          autoconocimiento de sus habilidades, a su mejor capacidad para
          afrontar la adversidad, a una mayor tolerancia a la frustración y al
          respeto de límites y normas. Así pues, el conjunto de experiencias
          sensoriales y motoras que ofrece la naturaleza en la infancia temprana
          contribuye a un desarrollo físico, emocional y espiritual más armónico
          e integrado.
        </p>
        <p className={tw("mb-4")}>
          El contacto con la naturaleza en edades tempranas tiene además
          múltiples beneficios para la salud: No sólo se trata del ejercicio
          físico evidentemente más intenso que realizan en el exterior. También
          tiene efectos beneficiosos para niños con trastornos del espectro
          autista, de déficit de atención, discapacitados físicos, psíquicos o
          sensoriales y enfermos crónicos; contribuye a la reducción de la
          tensión y de la espasticidad; fomenta la concentración y capacidad de
          atención y mitiga comportamientos antisociales como la violencia, el
          acoso, el vandalismo y el absentismo.
        </p>
        <p className={tw("mb-4")}>
          Para saber más, véase Hueso, K. (2017) Somos naturaleza. Plataforma
          editorial, Barcelona
        </p>
        <p className={tw("mb-4")}>
          <a
            className={tw("text-red-800 hover:text-red-400 underline")}
            href="https://www.plataformaeditorial.com/libro/5777-somos-naturaleza"
            target="_blank"
          >
            https://www.plataformaeditorial.com/libro/5777-somos-naturaleza
          </a>
        </p>
      </div>
    </section>
  );
};

export default SectionContent;
