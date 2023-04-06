import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Detalle from "../containers/Detalle";
import Layout from "../components/Layout";
function App() {
  <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
  return (
    <>
      
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/Detalle" element={<Detalle/>}></Route>
        </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
