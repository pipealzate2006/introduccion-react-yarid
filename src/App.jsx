import "./index.css";
import Saludo from "./components/Saludo.jsx";
import Contenedor from "./components/Contenedor.jsx";
import Contador from "./components/Contador.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/saludo"
            element={<Saludo nombre="Hola Mundo" idioma="Hello World" />}
          />
          <Route
            path="/contenedor"
            element={
              <Contenedor>
                <p>Este es el contenedor</p>
              </Contenedor>
            }
          />
          <Route path="/contador" element={<Contador />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
