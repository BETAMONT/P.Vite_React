import React,{useState} from "react";

function Asistencia({nombre,asistencias}) {
    const [numAsistencias, setAsistencias] = useState(asistencias);

    return (
        <>
            <div>
                <h2>Asistencias de {nombre}</h2>
                <button onClick={()=> setAsistencias(numAsistencias +1)}>Agregar Asistencia</button>
                <button onClick={()=> setAsistencias(numAsistencias -1)}>Quitar Asistencia</button>
                <p>Numero de Asitencias: {numAsistencias}</p>
            </div>
        </>
    );
}
export default Asistencia;