import React from "react";
import '..//assets/css/Login.css'

export default function () {
  return (
    <>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form action="">
              <h2>Login</h2>
              <div className="inputbox">
                <input type="email" required />
                <label htmlFor="">Email</label>
              </div>
              <div className="inputbox">
                <input type="password" required />
                <label htmlFor="">Password</label>
              </div>
              <div className="forget">
                <label htmlFor="">
                  <input type="checkbox" value='Recordarme'/><label htmlFor="">Recordarme / </label><a href=""> 
                  
                  Olvide la Contraseña</a></label>
                  
              </div>
              <button>Entrar</button>
              <div className="register">
                <p>No tengo cuenta, <a href="">Registrarme</a></p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
