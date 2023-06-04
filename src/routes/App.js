import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "../containers/Home";
import Layout from "../components/Layout";
import Login from "../containers/Login";
import Registro from "../containers/Registro";

import Productos from "../components/Productos/Productos";

import Contacto from "../containers/Contacto";
import Ayuda from "../containers/Ayuda";
import Actividades from "../containers/Actividades";
import AltaUsuario from "../containers/AltaUsuario";
import LaEmpresa from "../containers/LaEmpresa.jsx";

function App() {
  const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
  };

  const ProtectedRoutes = () => {
    const isLogin = isAuthenticated();
    return isLogin ? <Outlet /> : <Navigate to={"/"} />;
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossOrigin="anonymous"
      />

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/LaEmpresa" element={<LaEmpresa />}></Route>
            {/* <Route
              exact
              path="/Emprendimientos"
              element={<Emprendimientos />}
            ></Route> */}
            <Route exact path="/Login" element={<Login />}></Route>
            <Route exact path="/Registro" element={<Registro />}></Route>
            <Route exact path="/Tienda" element={<Productos />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route element={<ProtectedRoutes />}>
              <Route path={"/actividades"} element={<Actividades />} />
            </Route>
            {/* <Route exact path="/actividades" element={<Actividades />}></Route> */}
            <Route exact path="/registro" element={<Registro />}></Route>
            <Route exact path="/AltaUsuario" element={<AltaUsuario />}></Route>
            <Route exact path="/contacto" element={<Contacto />}></Route>
            <Route exact path="/ayuda" element={<Ayuda />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
