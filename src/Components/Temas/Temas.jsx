import cuestionarios from '../../assets/cuestionarios/cuestionarios';
import Tema from './Tema';

const Temas = ({setTema, setModo}) => {
    return (
        <div className="flex flex-col items-center space-y-6 h-dvh w-dvw">
            <div>
                <div className="p-8 m-8 text-center rounded-3xl text-8xl bg-slate-200">
                    Selecciona un tema
                </div>
                <div className="flex space-x-4">
                    {cuestionarios().map((cuestionario) => (
                        <Tema 
                            key={cuestionario.Numero} 
                            tema={cuestionario.Numero} 
                            setTema={setTema}
                            className="cursor-pointer"
                        />
                    ))}
                </div>
                <div className="flex flex-row-reverse">
                    <button className="p-4 bg-slate-200 rounded-xl" onClick={() => setModo("")} >
                        volver
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Temas;