import { useState } from "react"
import { GifApi } from "./components/GifApi";
import { GifInput } from "./components/GifInput"

export const GifExpertApp = () => {

    const [gifArray, setGifArray] = useState([])


    const gifArrayFunction = ( inputText ) => {     
        
        if( gifArray.includes(inputText) ){
            return;
        }
        
        // console.log(inputText);
        setGifArray([ inputText , ...gifArray ]);
        // console.log(gifArray);
    };

    return (
        <>
            <button className="boton-reiniciar" onClick={() => window.location.reload()}>X</button>

            {/* titulo principal */}
            <h1>GifsApp</h1>

            {/* Input */}
            <GifInput onGifArrayFunction={ gifArrayFunction } />

            {/* Mostrar arreglo de gifs */}

            {/* <h2>Mostrando arreglo</h2> */}
            <ol>
            {
                gifArray.map( gifName  =>  <GifApi key={ gifName } gifName={ gifName } />)
            }
            </ol>

        </>
    )
}
