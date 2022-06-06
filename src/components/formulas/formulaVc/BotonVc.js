import React from 'react';

function BotonVc(props) {

   
    const vc = () => {
        var rpmVc = document.getElementById("rpm").value;
        var diametroVc = document.getElementById("diam").value;
        var resultadoVc = 0;

        if (rpmVc < 0 || diametroVc < 0) {
            resultadoVc = 'Los valores deben ser mayor a 0.';
            alert(resultadoVc);
            return 0;
        } else if (rpmVc === '' || diametroVc === '') {
            resultadoVc = 'Ingrese todos los campos requeridos';
            alert(resultadoVc);
            return 0;
        } else {
            resultadoVc = diametroVc * 3.14 * rpmVc / 1000;
            return resultadoVc.toFixed(2);
        }
    }

    return (
        <div className='btn btn-primary' id='boton' onClick={() => props.manejarClic(vc())}>
            Calcular
        </div>
    )
}
const PantallaVc = ({ input }) => (
    <div className='input'>
        {input}
    </div>
);

export { BotonVc, PantallaVc };