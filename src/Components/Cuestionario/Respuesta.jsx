const Respuesta = ({ respuesta, indice, setRespuestas, respuestas, corregido }) => {
    //respuesta: {Respuesta: "...", Correcta: true}
    //indice: 0,1,2,...
    //setRespuestas: function to set the state of the answers
    //respuestas: [true, false, false, ...]
    //corregido: true or false
    let color;
    console.log(respuesta)
    console.log("RESPUESTAAAAAAAAAAASSSSSSSSSSSSS", respuesta.EsCorrecta, respuestas[indice], corregido);
    if(corregido) {
        if(respuesta.EsCorrecta === respuestas[indice]) {
            color = "fill-green-500";
        } else {
            color = "fill-red-500";
        }
    } else {
        color = "fill-slate-200";
    }
    console.log(color)
    let svg;
    //Si lo he seleccionado
    if(respuestas[indice]) {
        svg = (
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${color}`} viewBox="0 0 24 24">
                <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 14l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
            </svg>
        );
    } else if (!respuestas[indice] && corregido) {
        svg = (
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${color}`} viewBox="0 -960 960 960">
                <path d="M280-440h400v-80H280v80Zm-80 320q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
            </svg>
        );

    } else {
        svg = (
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${color}`} viewBox="0 0 24 24">
                <path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path>
            </svg>

        );
    }
    
    if(corregido) {
        return (
            <div key={respuesta.Respuesta}>
                <button>
                    {svg}
                </button>
                {respuesta.Respuesta}
            </div>
        );
    } else {
        return (
            <div key={respuesta.Respuesta}>
                <button onClick={() => setRespuestas(respuestas.map((k, i) => indice === i ? !k : k))}>
                    {svg}
                </button>
                {respuesta.Respuesta}
            </div>
        );
    }
};

export default Respuesta;