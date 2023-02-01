import { useEffect, useState } from "react"
import { ClimaInput } from "./components/ClimaInput"
import { ResultadoClima } from "./components/ResultadoClima";
import { consultarApiClima } from "./function/consultarApiClima";

export const ClimaApp = () => {

    const [date, setDate] = useState({})


    const obtenerDatos = async(city, country) => {
        const datos = await consultarApiClima(city, country);

        setDate(datos);
    }
    
    const setCityAndCountry = (city, country) => {
            obtenerDatos(city, country);
        };
  
    

    
    return (
        <>  
            <h1 className="titulo-clima">ClimaApp</h1>
            <h2 className="subtitulo-clima">busca el clima</h2>
            <p className="parrafo-clima">Agrega tu ciudad y país, el resultado se mostrará aquí</p>

            {/* Input */}
            <ClimaInput onCityAndCountry={ setCityAndCountry }/>


            {/* Resultado */}
            <ResultadoClima datos={date}/>

        </>
    )
}
