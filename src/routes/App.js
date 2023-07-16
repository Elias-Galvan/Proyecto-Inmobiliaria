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
import DescActividad from "../components/DescActividad";
import Contacto from "../containers/Contacto";
import Ayuda from "../containers/Ayuda";
import Actividades from "../containers/Actividades";
import CrudUsuarios from "../components/CrudUsuarios/CrudUsuarios";
import FormActividad from "../components/CrudActividad/FormActividad";
import CrudProductos from "../components/Productos/CrudProductos";
import Carrito from "../containers/Carrito";
import TerminosyCond from "../containers/TerminosyCond";
import Politicas from "../containers/Politicas";
import Graficos from "../containers/Graficos";

function App() {
  const isAuthenticated = () => {
    return sessionStorage.getItem("token") !== null;
  };

  const ProtectedRoutes = () => {
    const isLogin = isAuthenticated();
    return isLogin ? <Outlet /> : <Navigate to={"/"} />;
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/registro" element={<Registro />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/contacto" element={<Contacto />}></Route>
          <Route exact path="/ayuda" element={<Ayuda />}></Route>
          <Route exact path="/altas" element={<CrudUsuarios />}></Route>
          <Route exact path="/termycond" element={<TerminosyCond />}></Route>
          <Route exact path="/politicas" element={<Politicas />}></Route>
          <Route exact path="/agregar-actividad" element={<FormActividad />} />
          <Route path="/editar-actividad/:id" element={<FormActividad />} />
          <Route path="/agregar-producto" element={<CrudProductos />} />
          <Route path="/editar-producto/:id" element={<CrudProductos />} />
          <Route path={"/actividades"} element={<Actividades />} />
          <Route
            exact
            path="/actividad/:id"
            element={<DescActividad />}
          ></Route>
          <Route exact path="/*" element={<Navigate to={"/"} replace />} />

          <Route element={<ProtectedRoutes />}>
            <Route exact path="/carrito" element={<Carrito />}></Route>
            <Route path={"/graficos"} element={<Graficos />} />
            <Route exact path={"/tienda"} element={<Productos />}></Route>
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
