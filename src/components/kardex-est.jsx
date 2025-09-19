function KardexEstudiante() {
    const nombre = "Rodrigo";
    const Carrera = "Ingenieria en Sistemas";
    const materia = "Diseño Web II";
    const nota1 = 18;
    const nota2 = 17;
    const nota3 = 20;
    const promedio = (nota1 + nota2 + nota3) / 3;
    const edad = 23;
    return (
        <>
         < div className="card"> 
            <div className="card-body">
                <h5 className="card-title">Kardex del Estudiante</h5>
                <p className="card-text">Nombre: {nombre}</p>
                <p className="card-text">Carrera: {Carrera}</p>
                <p className="card-text">Materia: {materia}</p>
                <p className="card-text"> Notas: {nota1},{nota2},{nota3}</p>
                <p className="card-text"> Promedio: {promedio}</p>
                <p className="card-text"> Edad: {edad}</p>
            </div>
        </div>
        </>
    )
}
export default KardexEstudiante;