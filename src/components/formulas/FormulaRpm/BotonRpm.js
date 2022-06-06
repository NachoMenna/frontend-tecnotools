import React from 'react';

function BotonRpm(props) {

    const rpm = () => {
        var diametroRpm = document.getElementById("diametro").value;
        var vcRpm = document.getElementById("vc").value;
        var resultadoRpm = 0;

        if (diametroRpm < 0 || vcRpm < 0) {
            resultadoRpm = 'Los valores deben ser mayor a 0.';
            alert(resultadoRpm)
            return 0;
        } else if (diametroRpm === '' || vcRpm === '') {
            resultadoRpm = 'Ingrese todos los campos requeridos';
            alert(resultadoRpm);
            return 0;
        } else {
            resultadoRpm = vcRpm * 1000 / 3.14 / diametroRpm;
            return resultadoRpm.toFixed(2);
        }
    }

    return (
        <div className='btn btn-primary' id ='boton' onClick={() => props.manejarClic(rpm())}>
            Calcular
        </div>
    )
}
const PantallaRpm = ({ input }) => (
    <div className='input'>
        {input}
    </div>
);

export { BotonRpm, PantallaRpm };