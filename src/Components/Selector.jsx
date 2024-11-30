import { useState } from "react";
import MainMenu from "./MainMenu/MainMenu";
import Temas from "./Temas/Temas";
import Cuestionario from "./Cuestionario/Cuestionario";

const Selector = () => {
    const [modo, setModo] = useState("");
    const [tema, setTema] = useState(0);
    console.log(modo, tema);
    if (modo=="") {
        return <MainMenu modo={modo} setModo={setModo}/>
    } else if (modo === "tema") {
        if (tema === 0) {
            return <Temas setTema={setTema} setModo={setModo}/>
        } else {
            return <Cuestionario tema={tema} setTema={setTema}/>
        }
    }
}

export default Selector;