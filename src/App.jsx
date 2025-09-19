import React from "react";
import HolaMundo from "./components/holamundo";
import KardexEstudiante from "./components/kardex-est";
import KardexEstudianteProps from "./components/kardex-est-props";
import Asistencia from "./components/asistencias";
import Asistencia2 from "./components/asistencia2";
import KardexPropsN2 from "./components/kardex-props-n2";

function App() {
  const estudiantes =[
          {"id": 1, "nombre": "Rodrigo Montecinos", "carrera": "INgenieria de Sistemas", "edad": 23},
          {"id": 2, "nombre": "Dilan Montecinos", "carrera": "INgenieria de Sistemas", "edad": 24},
          {"id": 3, "nombre": "Simon Siles", "carrera": "INgenieria de Sistemas", "edad": 25},
        ];
  return (
    <>
      <h1>Clase Virtual 15 de Septiembre</h1>
      <KardexEstudiante/>
      <KardexEstudianteProps
        nombre="Dilan Montecinos"
        carrera="Ingenieria de sistemas"
        materia="Diseño Web II"
        notas={[16, 18, 15]}
        edad={24}
        />
        <br />
        <>
        <Asistencia nombre="Dilan Montecinos" asistencias={2}/>
        <Asistencia nombre="Rodrigo Montecinos" asistencias={1}/>
        <Asistencia nombre="Simon Siles" asistencias={2}/>
        </>
        <br />
        <br />
        <>
        <Asistencia2 nombre="Dilan Montecinos" asistencias={2}/>
        <Asistencia2 nombre="Rodrigo Montecinos" asistencias={1}/>
        <Asistencia2 nombre="Simon Siles" asistencias={2}/>
        </>
        <br />
        <h1> Lista de Estudiantes MAP</h1>

        {estudiantes.map((estudiante) => (
            <KardexPropsN2 datos={estudiante} key={estudiante.id}/>
        ))
        }
    </>
  );
}

export default App;