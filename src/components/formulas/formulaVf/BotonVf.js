import React from 'react';

function BotonVf(props) {


    const vf = () => {
        var rpmVf = document.getElementById("rpmAvance").value;
        var avanceVf = document.getElementById("avanceF").value;
        var dientesVf = document.getElementById("dientesZ").value;
        var resultadoVf = 0;

        if (rpmVf < 0 || avanceVf < 0 || dientesVf < 0) {
            resultadoVf = 'Los valores deben ser mayor a 0.';
            alert(resultadoVf);
            return 0;
        } else if (rpmVf === '' || avanceVf === '' || dientesVf === '') {
            resultadoVf = 'Ingrese todos los campos requeridos';
            alert(resultadoVf);
            return 0;
        } else {
            resultadoVf = avanceVf * rpmVf * dientesVf;
            return resultadoVf.toFixed(2);

        }
    }

    return (
        <div className='btn btn-primary' id='boton' onClick={() => props.manejarClic(vf())}>
            Calcular
        </div>
    )
}
const PantallaVf = ({ input }) => (
    <div className='input'>
        {input}
    </div>
);

export { BotonVf, PantallaVf };