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
import LaEmpresa from "../containers/LaEmpresa.jsx";
import CrudUsuarios from "../components/CrudUsuarios/CrudUsuarios";
import FormActividad from "../components/CrudActividad/FormActividad";

function App() {
  const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
  };

  const ProtectedRoutes = () => {
   // const isLogin = isAuthenticated();
   const isLogin= true;
    return isLogin ? <Outlet /> : <Navigate to={"/"} />;
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
         
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/Registro" element={<Registro />}></Route>
          <Route exact path="/Tienda" element={<Productos />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route element={<ProtectedRoutes />}>
            <Route path={"/actividades"} element={<Actividades />} />
          </Route>
          <Route exact path="/registro" element={<Registro />}></Route>
          <Route exact path="/contacto" element={<Contacto />}></Route>
          <Route exact path="/ayuda" element={<Ayuda />}></Route>
          <Route exact path="/altas" element={<CrudUsuarios />}></Route>
          <Route
            exact
            path="/agregar-actividad"
            element={<FormActividad />}
          ></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
