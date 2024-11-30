const Tema = ({ tema, setTema }) => {
    return (
        <span className="items-center p-4 text-center cursor-pointer rounded-xl bg-slate-200 text align-" onClick={() => setTema(Number(tema))}>
            Tema {tema}
        </span>
    );
}

export default Tema;