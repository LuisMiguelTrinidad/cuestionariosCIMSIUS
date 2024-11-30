const MainMenu = ({setModo}) => {
    return (
        <div className="flex flex-col items-center justify-center space-y-6 h-dvh w-dvw">
            <div className="m-8 text-center text-8xl">Cuestionarios CIMSI</div>
            <div className="flex space-x-6">
                <button onClick={() => setModo("tema")} className="flex flex-col items-center w-64 h-64 p-6 bg-slate-200 rounded-3xl">
                    <div className="text-4xl text-center">Por tema</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-40 h-40" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6v13m9-13v13m9-13v13" />
                    </svg>
                </button>
                <button onClick={() => setModo("aleatorio")} className="flex flex-col items-center w-64 h-64 p-6 bg-slate-200 rounded-3xl">
                    <div className="text-4xl text-center">Aleatorio</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-40 h-40" viewBox="0 0 512 512">
                        <path 
                            fill="currentColor" 
                            d="M218.4 24.72c-14.2 0-30.5 3.56-49.5 11.88c77.2 8.6 65.9 91.4 14.1 106.2c-65.4 18.7-131.31-23.7-98.34-99.2c-39.67 18.95-42.17 80.8-12.93 111.5C141.3 227.9 56.9 279 37.25 200.7C-1.929 326.2 60.34 489.5 258.7 489.5c250.7 0 282-374.7 129.2-415.04c26.5 43.04-13.1 70.94-24.9 73.14c-51.3 9.9-58.1-122.89-144.6-122.88m37.5 118.08c4.5 0 9.4 1.1 12.8 2.9l115.9 67.1c7.4 4.1 7.4 10.9 0 15.2l-115.9 66.9c-7.2 4.3-18.5 4.3-25.7 0L126.8 228c-7.3-4.3-7.3-11.1 0-15.2L243 145.7c3.4-1.8 7.9-2.9 12.9-2.9m-89 62.6c-21.6-.4-33.1 15-18.2 24.3c9.6 4.8 23.7 4.4 32.7-.8c8.8-5.3 9.5-13.7 1.5-19.4c-4.3-2.5-10-4-16-4.1m178.6.1c-20.8.4-31.3 15.5-16.3 24.5c9.6 4.9 23.9 4.6 33-.7c8.9-5.3 9.5-13.9 1.2-19.6c-4.2-2.4-9.9-4-15.9-4.2zm-89 0c-6.6-.1-13 1.5-17.7 4.2c-10.2 5.6-10.4 15.1-.6 20.9c9.9 5.8 25.8 5.6 35.1-.6c15-9 4.6-24.3-16.8-24.5m-141 41c1.5.1 3.4.5 5.6 1.6l111.5 64.5c7.2 4.1 12.9 14.2 12.9 22.5v119.7c0 8.3-5.7 11.7-12.9 7.6L121.2 398c-7.4-4.3-13.2-14.2-13.2-22.6V255.7c0-6.2 3-9.2 7.5-9.2m281.3 0c4.2 0 7.2 3 7.2 9.2v119.7c0 8.4-6 18.3-13 22.6l-111.5 64.4c-7.2 4.1-12.9.7-12.9-7.6V335.1c0-8.3 5.7-18.4 12.9-22.5L391 248.1c2.1-1.1 4.2-1.5 5.8-1.6m-185 65.5h-1.1c-5.3.4-8.5 4.8-8.5 11.6c-.6 10.4 7.2 24.1 16.9 29.8c9.8 5.6 17.6 1.1 17.2-9.9c.2-14.2-13.3-31.1-24.5-31.5m130.9 21.8c-11.2.1-24.8 17.2-24.7 31.4c.1 10.4 7.7 14.4 17.2 8.9c9.4-5.5 17-18.3 17.1-28.8c0-6.7-3.3-11.1-8.5-11.5zm-216.9 22.5c-5.4.3-8.7 4.7-8.7 11.6c-.5 10.5 7.3 24.1 17 29.8c9.8 5.5 17.6 1 17.2-10.1c0-14.5-14.1-31.8-25.5-31.3" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default MainMenu;