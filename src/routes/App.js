import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Home from "../containers/Home";
import Layout from "../components/Layout";
import LaEmpresa from "../containers/LaEmpresa";
import Emprendimientos from "../containers/Emprendimientos";
import Login from "../containers/Login";
import Registro from "../containers/Registro";
function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/LaEmpresa" element={<LaEmpresa />}></Route>
            <Route
              exact
              path="/Emprendimientos"
              element={<Emprendimientos />}
            ></Route>
            <Route exact path="/Login" element={<Login />}></Route>
            <Route exact path="/Registro" element={<Registro />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
