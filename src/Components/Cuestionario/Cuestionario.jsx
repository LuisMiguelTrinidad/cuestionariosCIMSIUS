import Cuestion from "./Cuestion";
import cuestionarios from "../../assets/cuestionarios/cuestionarios";

const Cuestionario = ({tema, setTema}) => {
    return (
        <div className="flex flex-col items-center my-12 space-y-6 h-dvh w-dvw">
            <div className="rounded-3xl">
                <div className="p-4 text-6xl bg-slate-500 rounded-t-3xl">Tema {tema}</div>
                {cuestionarios()[tema - 1].Preguntas.map(cuestion => (
                    <Cuestion key={cuestion.Pregunta} cuestion={JSON.stringify(cuestion)}/>
                ))}
                <div className="flex flex-row-reverse">
                    <button onClick = {() => setTema(0)}>
                        volver
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cuestionario;