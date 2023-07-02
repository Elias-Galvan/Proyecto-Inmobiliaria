import React from "react";
import { Link } from "react-router-dom";
export default function Politicas() {
  return (
    <div>
      <div className="container-term">
        <div className="iner">
          <h2>
            Política de Privacidad del Gimnasio - Manejo de Datos del Usuario
          </h2>
          <br />
          <br />
          <h3>RECOPILACIÓN DE DATOS PERSONALES</h3>
          <p>
            a. El gimnasio recopilará datos personales de los usuarios durante
            el proceso de inscripción y durante el uso de los servicios
            ofrecidos.<br/> b. Los datos personales recopilados pueden incluir, entre
            otros, nombre, dirección, número de teléfono, dirección de correo
            electrónico, fecha de nacimiento y datos de salud relevantes.
          </p>
          <h3>USO DE DATOS PERSONALES</h3>
          <p>
            a. Los datos personales recopilados se utilizarán exclusivamente
            para los fines relacionados con la prestación de servicios por parte
            del gimnasio.<br/> b. Estos fines pueden incluir, entre otros, la
            administración de la membresía, la comunicación con los usuarios, la
            programación de actividades y el seguimiento del progreso físico.
          </p>
          <h3>PROTECCIÓN DE DATOS</h3>
          <p>
            a. El gimnasio implementará medidas de seguridad apropiadas para
            proteger los datos personales de los usuarios contra acceso no
            autorizado, divulgación o alteración.<br/> b. Se aplicarán procedimientos
            y políticas internas para garantizar la confidencialidad y seguridad
            de los datos personales recopilados.
          </p>

          <h3>DIVULGACIÓN DE DATOS PERSONALES</h3>
          <p>
            a. El gimnasio no divulgará los datos personales de los usuarios a
            terceros sin su consentimiento expreso, a menos que sea requerido
            por ley o por una orden judicial.<br/> b. En caso de ser necesario
            compartir información con terceros proveedores de servicios (por
            ejemplo, procesadores de pagos), se tomarán medidas para garantizar
            la confidencialidad y seguridad de los datos personales.
          </p>
          <h3>DERECHOS DE LOS USUARIOS</h3>
          <p>
            a. Los usuarios tienen derecho a acceder, corregir, actualizar o
            eliminar sus datos personales almacenados por el gimnasio.<br/> b. Los
            usuarios pueden ejercer estos derechos enviando una solicitud por
            escrito al gimnasio, según los canales de comunicación
            proporcionados
          </p>
          <h3>RETENCIÓN DE DATOS</h3>
          <p>
            Los datos personales se conservarán únicamente durante el tiempo
            necesario para cumplir con los fines para los que fueron
            recopilados, a menos que se requiera una retención más prolongada
            por motivos legales o regulatorios.
          </p>
          <h3>CONSENTIMIENTO</h3>
          <p>
            Al proporcionar sus datos personales al gimnasio, los usuarios
            aceptan y otorgan su consentimiento para el manejo y procesamiento
            de dichos datos de acuerdo con esta política de privacidad.
          </p>
        </div>
        
        <div className="btnfinal">
          <Link to="/Registro" className="btn btn-primary">
            Volver al Registro
          </Link>
        </div>
      </div>
    </div>
  );
}
