import { css, tw } from "twind/css";
import NavBar from "@/islands/NavBar.tsx";
import { Head } from "$fresh/runtime.ts";
import SectionFooter from "@/components/Shared/SectionFooter.tsx";

import { ContextState } from "@/routes/_app.tsx";
import getFixedT from "@/components/i18n.ts";
import { RouteConfig } from "$fresh/server.ts";
import { useContext } from "preact/hooks";

export const config: RouteConfig = {
  routeOverride: "/(legal-privacy-policy|legal-politica-de-privacidad)",
};

export default function politicaDePrivacidad() {

  const { languageAccepted } = useContext(ContextState);
  const t = getFixedT(languageAccepted);
  const menuTexts = t("menu", { returnObjects: true });


  return (
    <>
      <Head>
        <title>
          Hegazti Escuela Bosque | Politica de privacidad
        </title>
        <meta name="robots" content="noindex" />
      </Head>
      <NavBar menuTexts={menuTexts} />
      <section
        className={tw(
          `mx-auto max-w-7xl px-2 sm:px-6 lg:px-8`,
        )}
      >
        <h1 className="hegazti-h1 text-left! py-8">
          POLÍTICA DE PRIVACIDAD
        </h1>
        <h3 className="text-2xl pt-8 pb-4">INTRODUCCIÓN</h3>
        <p className="mb-4">
          Su privacidad es importante para nosotros, así que, mediante este
          documento, le explicamos qué datos recogemos de los usuarios, como los
          utilizamos y para qué, entre otras indicaciones. Los mayores de 14
          años podrán registrarse como usuarios sin el previo consentimiento de
          sus padres, tutores o representantes legales. En caso de menores de 14
          años o identificados como "incapaces legalmente", siempre
          necesitaremos del consentimiento paterno, o del tutor / a o
          representante legal.
        </p>
        <p className="mb-4">
          Para su información, nunca pediremos más información de la que
          realmente necesitaremos para los servicios requeridos; nunca la
          compartiremos con terceros, excepto por obligación legal o con su
          autorización previa; y nunca utilizaremos sus datos para otra
          finalidad no indicada previamente.
        </p>
        <p className="mb-4">
          Como usuarios, deberá leer atentamente esta Política de privacidad de
          manera regular, y siempre que introduzca sus datos personales, ya que
          este documento puede sufrir modificaciones ya que el prestador puede
          modificar cualquier tipo de información que pudiera aparecer en la web
          para cumplir con la normativa o actualizar la política, y sin que
          exista la obligación de preavisar o poner en conocimiento de los
          usuarios dichas obligaciones, siendo suficientes la publicación en el
          sitio web del prestador.
        </p>
        <h3 className="text-2xl pt-8 pb-4">
          RESPONSABLE DEL TRATAMIENTO:
        </h3>
        <p className="mb-4">
          Identidad:<strong>
            &nbsp;ASOCIACIÓN FAMILIAS HEGAZTI
          </strong>(también el prestador)
        </p>
        <p className="mb-4">
          NIF:<strong>
            G26525329&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </strong>
        </p>
        <p className="mb-4">
          Dirección postal:<strong>
            &nbsp;Carretera de Aras 6, 31230, Viana,
            Navarra&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </strong>
        </p>
        <p className="mb-4">
          Correo electrónico:<strong>
            &nbsp;info@hegaztiescuelabosque.org
          </strong>
        </p>
        <p className="mb-4">
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>, como responsable del sitio web, de conformidad con lo
          dispuesto en el Reglamento (UE) 2016/679 de 27 de abril de 2016 (RGPD)
          relativo a la protección de las personas físicas en lo que respecta al
          tratamiento de datos personales ya la libre circulación de estos datos
          y demás normativa vigente en materia de protección de datos
          personales, y por la Ley 34/2002, de 11 de julio, de Servicios de la
          Sociedad de la Información y del Comercio Electrónico (LSSICE), le
          informa que tiene implementadas las medidas de seguridad necesarias,
          de índole técnica y organizativas, para garantizar y proteger la
          confidencialidad, integridad y disponibilidad de los datos
          introducidos.
        </p>
        <h3 className="text-2xl pt-8 pb-4">
          MÉTODO DE OBTENCIÓN DE LOS DATOS y DATOS QUE RECAUDAMOS:
        </h3>
        <p className="mb-4">
          Los datos que recogemos y cómo las obtenemos es la siguiente:
        </p>
        <ol data-rte-list="default">
          <li>
            <p className="mb-4">
              mediante el formulario de contacto: nombre, email
            </p>
          </li>
          <li>
            <p className="mb-4">
              mediante el formulario de reserva: nombre, DNI, teléfono, email
            </p>
          </li>
        </ol>
        <p className="mb-4">
          No se tratan categorías de datos especialmente protegidos.
        </p>
        <h3 className="text-2xl pt-8 pb-4">FINALIDAD DEL TRATAMIENTO:</h3>
        <p className="mb-4">
          Sus datos personales sólo se utilizarán para las siguientes
          finalidades, prestando su consentimiento para cada una de las
          finalidades en el apartado correspondiente de la web:
        </p>
        <ol data-rte-list="default">
          <li>
            <p className="mb-4">
              <strong>formulario de contacto:</strong>para responder a las
              consultas y / o proporcionar informaciones requeridas por el
              Usuario;
            </p>
          </li>
          <li>
            <p className="mb-4">
              <strong>formulario de reserva:</strong>para solicitar los
              servicios que ofrecemos en la web.
            </p>
          </li>
          <li>
            <p className="mb-4">
              <strong>WhatsApp</strong>: el tratamiento de los datos que se
              lleven a cabo de las personas que realicen una consulta a través
              de WhatsApp de{" "}
              <strong>
                ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
              </strong>se regirá por este apartado, así como aquellas
              condiciones de uso, políticas de privacidad y normativas de acceso
              que pertenezcan a la aplicación que procedan en cada caso y
              aceptadas previamente por el usuario.{" "}
              <strong>
                ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
              </strong>, tratará sus datos con la finalidad de administrar
              correctamente su consulta así como cualquier otra finalidad de la
              gestión administrativa del servicio. Queda prohibido el uso del
              WhatsApp de{" "}
              <strong>
                ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
              </strong>, para el envío de contenidos que no sean los necesarios
              para la respuesta a la consulta y que sean ilícitos por la
              normativa nacional o internacional que atente contra los derechos
              fundamentales de las personas y en general que contravengan los
              principios de legalidad, honradez, responsabilidad, protección de
              la vida privada, la protección del consumidor y los derechos de
              propiedad intelectual e industrial.
            </p>
          </li>
          <li>
            <p className="mb-4">
              <strong>Otras finalidades</strong>:
            </p>
            <ul data-rte-list="default">
              <li>
                <p className="mb-4">
                  Realizar las gestiones comerciales, administrativas, fiscales,
                  contables que sean necesarias en virtud de la legislación
                  vigente;
                </p>
              </li>
              <li>
                <p className="mb-4">
                  Conocer su opinión y mejorar los servicios prestados por la
                  web;
                </p>
              </li>
              <li>
                <p className="mb-4">
                  Realización de análisis de usabilidad de la web, a través de
                  las cookies (mencionadas en la política de cookies);
                </p>
              </li>
              <li>
                <p className="mb-4">
                  Redes sociales: en el apartado correspondiente se especifica
                  el uso de las redes sociales.
                </p>
              </li>
            </ul>
          </li>
        </ol>
        <p className="mb-4">
          Las fotografías que estén colgadas en la web son propiedad de{" "}
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>, incluyendo las de los menores, en las que, para la
          obtención de estas, se ha obtenido el consentimiento previo de los
          padres, tutores o representantes legales mediante la firma de los
          formularios realizados para tal efecto por los centros de los que los
          menores forman parte. Sin embargo, los padres, tutores o
          representantes de los menores, como titulares del ejercicio de los
          derechos de estos, y siempre previo requerimiento formal por escrito,
          pueden indicar la negativa al uso de la imagen del menor; en este
          caso, la imagen se mostrará pixelada.
        </p>
        <p className="mb-4">
          Puede revocar en cualquier momento su consentimiento remitiendo un
          escrito con el asunto "Baja" en el mail reseñado.
        </p>
        <p className="mb-4">
          De acuerdo con la LSSICE,{" "}
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>{" "}
          no realiza prácticas de SPAM, por lo tanto, no envía correos
          comerciales por e-mail que no hayan sido previamente solicitados o
          autorizados por el Usuario. En consecuencia, en todas las
          comunicaciones que recibirá del prestador, el usuario tiene la
          posibilidad de cancelar su consentimiento expreso para recibir
          nuestras comunicaciones.
        </p>
        <p className="mb-4">
          No trataremos sus datos personales para ningún otro fin de las
          descritas excepto por obligación legal o requerimiento judicial.
        </p>
        <p className="mb-4">
          No será objeto de decisiones basadas en tratamientos automatizados que
          produzcan efectos sobre sus datos.
        </p>
        <p className="mb-4">&nbsp;</p>
        <h3 className="text-2xl pt-8 pb-4">
          LEGITIMACIÓN DEL TRATAMIENTO
        </h3>
        <p className="mb-4">
          La base legal para el tratamiento de los datos es su consentimiento
          otorgado en el momento de dar sus datos en el formulario
          correspondiente para llevar a cabo las finalidades, en el momento de
          marcación de la casilla de verificación.
        </p>
        <p className="mb-4">
          El no facilitar los datos personales solicitados o el no aceptar la
          presente política de privacidad supone la imposibilidad de conseguir
          las finalidades anteriormente descritas.En los casos en que haya una
          previa relación contractual entre las partes, la legitimación para el
          desarrollo de las obligaciones administrativas, fiscales, contables y
          laborales que sean necesarias en virtud de la legislación vigente será
          {" "}
          <strong>la existencia previa de la relación comercial</strong>{" "}
          establecida entre las partes.
        </p>
        <p className="mb-4">
          La oferta prospectiva o comercial de productos y servicios está basada
          en el consentimiento que se le solicita, sin que en ningún caso la
          retirada de este consentimiento condicione la ejecución del contrato
          de suscripción.
        </p>
        <p
          class=""
          data-rte-preserve-empty="true"
          style="white-space:pre-wrap;"
        >
        </p>
        <h3 className="text-2xl pt-8 pb-4">
          PLAZO DE CONSERVACIÓN DE LOS DATOS:
        </h3>
        <p className="mb-4">
          Sus datos se conservarán mientras dure la relación comercial con
          nosotros o ejerce su derecho de cancelación u oposición, o limitación
          al tratamiento. Sin embargo, conservaremos sus datos en los plazos
          legalmente previstos en las disposiciones aplicables.
        </p>
        <h3 className="text-2xl pt-8 pb-4">
          DESTINATARIOS DE CESIONES O TRANSFERENCIAS:
        </h3>
        <p className="mb-4">
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>{" "}
          no lleva a cabo ninguna cesión o comunicación de datos ni dentro ni
          fuera de la UE. El prestador únicamente facilitará información a las
          fuerzas y cuerpos de seguridad bajo orden judicial o por obligación de
          una norma legal, sin perjuicio de poder bloquear o cancelar su cuenta
          si puede haber indicios de la comisión de algún delito por parte del
          usuario. La información facilitada será sólo la que disponga en ese
          momento el prestador.
        </p>
        <p className="mb-4">
          La información que nos proporcione a través de este sitio web será
          alojada en los servidores de{" "}
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>, contratados a la empresa SQUARESPACE IRELAND LTD con NIF
          3041081MH y domicilio en Le Pole House Ship Street Great, Dublin 8,
          Ireland que presta el servicio de alojamiento de la web. El
          tratamiento de los datos de la entidad se encuentra regulado mediante
          un contrato de encargado del tratamiento entre el prestador y esta
          empresa.
        </p>
        <p className="mb-4">
          Asimismo, el prestador utiliza determinadas herramientas para prestar
          servicios necesarios para el desarrollo de la actividad, pudiendo
          almacenar sus datos. Estas herramientas son las siguientes:
        </p>
        <p className="mb-4">
          <strong>Google Analytics</strong>: para realizar un análisis y métrica
          del uso que los usuarios hacen de la web a través de las cookies. La
          información que generan y recopilan estas cookies sobre el uso
          (incluyendo la dirección IP) será directamente transmitida y archivada
          por Google Inc., ubicada en Delaware, 1600 Amphitheatre Parkway,
          montaré View (California), CA 94043 de Estados Unidos ( " Google "),
          en sus servidores de Estados Unidos.
        </p>
        <h3 className="text-2xl pt-8 pb-4">
          DERECHOS DE LAS PERSONAS INTERESADAS:
        </h3>
        <p className="mb-4">
          Como usuario-interesado, puede solicitar el ejercicio de los
          siguientes derechos ante{" "}
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>presentando un escrito a la dirección postal del
          encabezamiento o enviando un correo electrónico a
          info@hegaztiescuelabosque.org, indicando como Asunto: "PROTECCIÓN
          DE DATOS: DERECHOS DE LOS AFECTADOS ", y adjuntando fotocopia de su
          DNI o cualquier medio análogo en derecho, tal como indica la
          ley.Derechos:
        </p>
        <ul data-rte-list="default">
          <li>
            <p className="mb-4">
              <strong>Derecho de acceso:</strong>{" "}
              permite al interesado conocer y obtener información sobre sus
              datos de carácter personal sometidos a tratamiento.
            </p>
          </li>
          <li>
            <p className="mb-4">
              <strong>Derecho de rectificación o supresión</strong>: permite
              corregir errores y modificar los datos que resulten ser inexactos
              o incompletos
            </p>
          </li>
          <li>
            <p className="mb-4">
              <strong>Derecho de cancelación</strong>: permite que se supriman
              los datos que sean inadecuados o excesivos
            </p>
          </li>
          <li>
            <p className="mb-4">
              <strong>Derecho de oposición</strong>: derecho del interesado a
              que no se lleve a cabo el tratamiento de sus datos de carácter
              personal o se cese en el mismo.
            </p>
          </li>
          <li>
            <p className="mb-4">
              <strong>Limitación del tratamiento</strong>: conlleva el marcado
              de los datos personales conservados, con el fin de limitar su
              futuro tratamiento, para el ejercicio o la defensa de
              reclamaciones.
            </p>
          </li>
          <li>
            <p className="mb-4">
              <strong>Portabilidad de los datos</strong>: facilitación de los
              datos objeto de tratamiento al interesado, para que éste pueda
              transmitir a otro responsable, sin impedimentos.
            </p>
          </li>
          <li>
            <p className="mb-4">
              <strong>
                Derecho a no ser objeto de decisiones individuales automatizadas
                (incluida la elaboración de perfiles)
              </strong>: derecho a no ser objeto de una decisión basada en el
              tratamiento automatizado que produzca efectos o afecte
              significativamente
            </p>
          </li>
        </ul>
        <p className="mb-4">
          Como usuario, tiene derecho a retirar el consentimiento dado en
          cualquier momento. La retirada del consentimiento no afectará a la
          licitud del tratamiento efectuado antes de la retirada del
          consentimiento.
        </p>
        <p className="mb-4">
          También tiene derecho a presentar una reclamación ante la autoridad de
          control si considera que pueden haberse visto vulnerados sus derechos
          en relación a la protección de sus datos (aepd.es).
        </p>
        <h3 className="text-2xl pt-8 pb-4">INFORMACIÓN ADICIONAL</h3>
        <p className="mb-4">
          <strong>MEDIDAS DE SEGURIDAD:</strong>
        </p>
        <p className="mb-4">
          Los datos que nos facilite se tratarán de forma confidencial. El
          prestador ha adoptado todas las medidas técnicas y organizativas y
          todos los niveles de protección necesarios para garantizar la
          seguridad en el tratamiento de los datos y evitar su alteración,
          pérdida, robo, tratamiento o acceso no autorizado, de acuerdo al
          estado de la tecnología y naturaleza de los datos almacenados.
          Asimismo, se garantiza también que el tratamiento y registro en
          ficheros, programas, sistemas o equipos, locales y centros cumplen con
          los requisitos y condiciones de integridad y seguridad establecidas en
          la normativa vigente.
        </p>
        <p className="mb-4">
          <strong>IDIOMA</strong>
        </p>
        <p className="mb-4">
          El idioma aplicable a esta política de privacidad es el castellano.
          Por tanto, en caso de que hubiera alguna contradicción en alguna de
          las versiones facilitadas en otros idiomas, prevalecerá la versión en
          castellano.
        </p>
        <p className="mb-4">
          <strong>REDES SOCIALES</strong>
        </p>
        <p className="mb-4">
          Le informamos que{" "}
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>{" "}
          puede tener presencia en redes sociales. El tratamiento de los datos
          que se lleve a cabo de las personas que se hagan seguidoras en las
          redes sociales (y / o realicen cualquier vínculo o acción de conexión
          a través de las redes sociales) de las páginas oficiales de{" "}
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>se regirá por este apartado , así como para aquellas
          condiciones de uso, políticas de privacidad y normativas de acceso que
          pertenezcan a la red social que proceda en cada caso y aceptadas
          previamente por el usuario.
        </p>
        <p className="mb-4">
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>{" "}
          tratará sus datos con las finalidades de administrar correctamente su
          presencia en la red social, informando de actividades, productos y
          servicios del prestador, así como para cualquier otra finalidad que
          las normativas de las Redes Sociales permitan.
        </p>
        <p className="mb-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Queda prohibida la publicación de contenidos:
        </p>
        <p className="mb-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          - Que sean presuntamente ilícitos por la normativa nacional,
          comunitaria o internacional o que realicen actividades presuntamente
          ilícitas o contravengan los principios de la buena fe.
        </p>
        <p className="mb-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          - Que atenten contra los derechos fundamentales de las personas,
          falten a la cortesía en la red, molesten o puedan generar opiniones
          negativas en nuestros usuarios o terceros y en general cualesquiera
          sean los contenidos que ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI considere inapropiados.
        </p>
        <p className="mb-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          - Y en general que contravengan los principios de legalidad, honradez,
          responsabilidad, protección de la dignidad humana, protección de
          menores, protección del orden público, la protección de la vida
          privada, la protección del consumidor y los derechos de propiedad
          intelectual e industrial.
        </p>
        <p className="mb-4">
          Asimismo,{" "}
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>{" "}
          se reserva la potestad de retirar, sin previo aviso del sitio web o de
          la red social corporativa aquellos contenidos que se consideran
          inadecuados.
        </p>
        <p className="mb-4">
          En todo caso, si Ud. remite información personal a través de la red
          social, ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI quedará exento de responsabilidad en relación
          con las medidas de seguridad aplicables a la presente plataforma y el
          usuario, en caso de querer conocerlas, debe consultar las
          correspondientes condiciones particulares de la red en cuestión.
        </p>
        <p className="mb-4">
          <strong>CAMBIOS EN LA PRESENTE POLÍTICA DE PRIVACIDAD</strong>
        </p>
        <p className="mb-4">
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>{" "}
          se reserva el derecho a modificar la presente política para adaptarla
          a novedades legislativas o jurisprudenciales.
        </p>
        <p className="mb-4">
          <strong>REVOCABILIDAD</strong>
        </p>
        <p className="mb-4">
          El consentimiento prestado, tanto por el tratamiento como para la
          cesión de los datos de los interesados, es revocable en cualquier
          momento comunicándolo a{" "}
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>{" "}
          en los términos establecidos en esta Política para el ejercicio de los
          derechos. Esta revocación en ningún caso tendrá carácter retroactivo.
        </p>
        <p className="mb-4">
          <strong>LEGISLACIÓN</strong>
        </p>
        <p className="mb-4">
          Con carácter general las relaciones entre{" "}
          <strong>
            ASOCIACIÓN ESCUELA BOSQUE FAMILIAS HEGAZTI
          </strong>{" "}
          con los Usuarios de sus servicios telemáticos, presentes en esta web,
          están sometidos a la legislación y jurisdicción española a la que se
          someten expresamente las partes, siendo competentes para la resolución
          de todos los conflictos derivados o relacionados con su uso los
          Juzgados y Tribunales de Navarra.
        </p>
      </section>
      <SectionFooter />
    </>
  );
}
