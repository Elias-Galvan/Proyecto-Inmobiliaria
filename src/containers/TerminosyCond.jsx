import React from "react";
import { Link } from "react-router-dom";

function TerminosyCond() {
  return (
    <div className="container-term">
      <div className="iner">
        <h3>INSCRIPCIÓN Y MEMBRESÍA</h3>
        <p>
          Para poder utilizar los servicios del gimnasio, es necesario completar
          el proceso de inscripción y adquirir una membresía válida. La
          inscripción y membresía están sujetas a disponibilidad y podrían
          requerir el pago de una tarifa.
        </p>
        <h3>BAJA ANTICIPADA</h3>
        <p>
          Podrás rescindir tu asociación anticipadamente al vencimiento del PMP,
          comunicándolo a DUO GYM por escrito completando el FORMULARIO DE BAJA
          correspondiente. La baja no producirá efectos si no se cumpliera con
          este requisito. En ese supuesto, al haber accedido a una promocion
          donde estaba involucrado un plazo minimo de permanencia que implica
          una cuota social menor de la que hubieses tenido que abonar sin
          adherirte a un plazo de permanencia mínima, se te reintegrará el
          importe abonado por el plazo no utilizado, con deducción de la
          diferencia existente entre lo que efectivamente abonaste por el
          período utilizado y la cuota que hubiese correspondido a ese mismo
          período a los valores de lista (pleno mensual) a la fecha en que
          adquirste la membresía, sin sujeción a la bonificación que implica el
          PMP. El socio/titular declara que entiende y acepta que el cobro de la
          cuota será efectuado independientemente de la tasa de uso de los
          servicios que proporciona DUO GYM en cualquiera de sus sucursales. DUO
          GYM no efectuará devolución de dinero alguno por la no asistencia del
          socio al gimnasio.
        </p>
        <h3>MUY IMPORTANTE</h3>
        <p>
          Traé tu apto físico. Es muy importante para que puedas entrenar en
          nuestras sucursales. El uso de los lockers diarios es gratuito. Sólo
          debés traer tu candado para que tus cosas queden seguras. Recordá
          vaciarlo al final de tu entrenamiento, ya que si no lo hacés, DUO GYM
          se verá obligado a romper el candado y deberás asumir su costo de
          reposición. Te pedimos que no traigas objetos de valor al gimnasio. No
          nos responsabilizamos por objetos perdidos. DUO GYM no se
          responsabiliza por el contenido de los lockers. Utilice un candado
          seguro, los lockers de uso diario serán abiertos al finalizar cada
          jornada y los lockers de alquiler serán abiertos una vez vencidos, sin
          posibilidad de reclamo alguno por parte del socio en mora. DUO GYM se
          reserva el derecho de modificar la grilla de actividades y horarios.
          El incumplimiento de las normas de convivencia facultará a DUO GYM a
          aplicar el derecho de admisión y/o permanencia. Todos los usuarios
          deberán presentar un certificado médico que demuestre su aptitud
          física para realizar actividades en el gimnasio. El certificado médico
          deberá ser entregado dentro de los primeros 15 días de la inscripción.
          De no presentarlo, el acceso al gimnasio podría ser restringido o
          denegado.
        </p>

        <h3>USO LIBRE DEL GIMNASIO</h3>
        <p>
          <strong>A</strong>. Los usuarios con membresía activa tienen acceso
          libre al gimnasio durante los horarios establecidos. b. El uso de las
          instalaciones está sujeto a las normas y regulaciones del gimnasio,
          incluyendo la limpieza de equipos y respeto hacia otros usuarios. c.
          El gimnasio no se hace responsable por lesiones o accidentes que
          puedan ocurrir durante el uso de las instalaciones.
        </p>
        <h3>ACEPTACIÓN DE LAS CONDICIONES</h3>
        <p>
          Tenés setenta y dos (72) horas para decirnos si NO estás de acuerdo
          con alguna de estas condiciones, en tu sucursal de origen o vía mail.
          De lo contrario, las tomaremos como aceptadas.
        </p>
        <div className="btnfinal">
          <Link to="/Registro" className="btn btn-primary">
            Volver al Registro
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TerminosyCond;
