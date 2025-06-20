import React, { useState } from "react";
import ClubInfoSection from "./assets/Components/from/ClubInfoSection";
import ContactSection from "./assets/Components/from/ContactSection";
import DirectivaSection from "./assets/Components/from/DirectivaSection";
import MiembrosSection from "./assets/Components/from/MiembrosSection";
import "./App.css";

const App = () => {
  const [paso, setPaso] = useState(0);

  const pasos = [
    { id: 0, nombre: "Información del Club", componente: <ClubInfoSection /> },
    { id: 1, nombre: "Contacto", componente: <ContactSection /> },
    { id: 2, nombre: "Directiva", componente: <DirectivaSection /> },
    { id: 3, nombre: "Miembros", componente: <MiembrosSection /> },
  ];

  const avanzar = () => {
    if (paso < pasos.length - 1) setPaso(paso + 1);
  };

  const retroceder = () => {
    if (paso > 0) setPaso(paso - 1);
  };

  return (
    <div className="app-container">     
      <div className="paso-contenido">
        {pasos[paso].componente}
         <div className="navegacion-botones">
        {paso > 0 && (
          <button className="boton" onClick={retroceder}>
            Anterior
          </button>
        )}
        {paso < pasos.length - 1 && (
          <button className="boton" onClick={avanzar}>
            Siguiente
          </button>
        )}
        {paso === pasos.length - 1 && (
          <button className="boton" onClick={() => alert("Formulario completo")}>
            Finalizar
          </button>
        )}
      </div> 
      </div>
    </div>
  );
};

export default App;
