import { useEffect, useState } from "react";
import { getGif } from "../function/getGif";

export const useFetchGifs = (gifName) => {
    
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const obtenerGifs = async() => {
        const newGifs = await getGif( gifName );
        setGifs( newGifs );
        setIsLoading( false );
    }

    useEffect(() => {
        obtenerGifs();
    }, [])


  return (
    {
        gifs: gifs,
        isLoading: isLoading
    }
  )
}
