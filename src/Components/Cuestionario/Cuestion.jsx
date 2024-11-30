import { useState } from "react";
import Respuesta from "./Respuesta";

const Cuestion = ({ cuestion }) => {
    let cuestionJSON = JSON.parse(cuestion);
    
    const [haRespondido, setHaRespondido] = useState(false);
    const [respuestas, setRespuestas] = useState(new Array(cuestionJSON.Respuestas.length).fill(false));
    
    return (
        <div className="p-6 space-y-6 bg-slate-bg-pink-200">
            <div className="text-3xl font-bold">
                {cuestionJSON.Pregunta}
            </div>
            <div>
                {cuestionJSON.Respuestas.map((respuesta, indice) => (
                    <Respuesta
                        key={respuesta.Respuesta}
                        respuesta={respuesta}
                        indice={indice}
                        setRespuestas={setRespuestas}
                        respuestas={respuestas}
                        corregido={haRespondido}
                    />
                ))}
            </div>
            <div>
                <button onClick={() => setHaRespondido(true)}>
                    Corregir
                </button>
            </div>
        </div>
    );
}

export default Cuestion;