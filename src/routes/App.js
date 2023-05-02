import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "../containers/Home";
import Layout from "../components/Layout";
import Login from "../containers/Login";
import Registro from "../containers/Registro";
import Contacto from "../containers/Contacto";
import Ayuda from "../containers/Ayuda";
import Actividades from "../containers/Actividades";

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

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
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/actividades" element={<Actividades />}></Route>
            <Route exact path="/registro" element={<Registro />}></Route>
            <Route exact path="/contacto" element={<Contacto />}></Route>
            <Route exact path="/ayuda" element={<Ayuda />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
