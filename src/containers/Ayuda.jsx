import React from "react";
import "../assets/css/Ayuda.css";
import Filosofia from "../components/Filosofia";


export default function () {
  return (
    <>
      <div className="container-faq">
        <h2 className="title">Todo lo que necesitas saber.</h2>
        <div className="faq">
          <div className="question">
            <h3>Que me ofrece DUO GYM?</h3>
            <svg width="15" height="10" viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="white"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="answer">
            <p>
              Una sala cardiovascular, musculación y de peso libre con
              equipamiento de primera línea, clases grupales con mucha onda
              (Funcional, Yoga; Aerolocal, Taller ABS y Estiramiento),
              vestuarios modernos y planes de entrenamiento prediseñados.
              Protocolos de seguridad en todas nuestras sucursales. Fitness como
              la gente a un precio para la gente.
            </p>
          </div>
        </div>

        <div className="faq">
          <div className="question">
            <h3>¿Puedo pagar en efectivo mes a mes?</h3>
            <svg width="15" height="10" viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="white"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="answer">
            <p>
              Tenemos distintas opciones de pago en efectivo. Te invitamos a
              acercarte a nuestras sucursales para asesorarte al respecto.{" "}
            </p>
          </div>
        </div>

        <div className="faq">
          <div className="question">
            <h3>¿Dónde encuentro los horarios de las clases de mi sucursal?</h3>
            <svg width="15" height="10" viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="white"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="answer">
            <p>
              Hacé click en el menú "Actividades". Hacé Scroll Down. ¡Ahí están!{" "}
            </p>
          </div>
        </div>

        <div className="faq">
          <div className="question">
            <h3>¿Hay entrenamiento personalizado?</h3>
            <svg width="15" height="10" viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="white"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="answer">
            <p>
              Si! DUO GYM cuenta con la posibilidad de personalizar al 100% tus
              entrenamientos y el seguimiento directo de un coach asignado.
              Desde que pruebes una clase en DUO GYM vas a contar con el
              acompañamiento de tu coach. Nuestro modelo de entrenamiento grupal
              por objetivos individuales permite combinar y potenciar tu
              entrenamiento personalizado con la motivación que genera entrenar
              en equipo en el marco de la comunidad DUO GYM.
            </p>
          </div>
        </div>

        <div className="faq">
          <div className="question">
            <h3>¿Cuantos a;os debo tener para poder entrenar en DUO GYM?</h3>
            <svg width="15" height="10" viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="white"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="answer">
            <p>
              Desde los 14 años* podés entrenar en DUO GYM con el consentimiento
              de tus padres o tutores. El entrenamiento para menores de edad
              podrá variar para adaptarse a su edad.
            </p>
          </div>
        </div>
      </div>
      <Filosofia />
    </>
  );
}
