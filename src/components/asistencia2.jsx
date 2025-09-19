import React,{useState} from "react";

function Asistencia2({nombre, asistencias}) {
    const [numAsistencia, setasistencia] = useState(asistencias);

    //agregar asistencia
    const agregarAsistencia = () => {
        setasistencia(numAsistencia + 1);
    }
    //quitar asistencia
    const quitarAsistencia = () => {
        setasistencia(numAsistencia - 1);
    }
    return (
        <>
            <div>
                <h2>Asistencias de {nombre}</h2>
                <button onClick={agregarAsistencia}>Agregar Asistencia</button>
                <button onClick={quitarAsistencia}>Quitar Asistencia</button>
                <p>Numero de Asistencias: {numAsistencia}</p>
            </div>
        </>
    );
}

export default Asistencia2;