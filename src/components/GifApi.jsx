import React, { useEffect, useState } from 'react'
import { getGif } from '../function/getGif'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifCard } from './GifCard';

export const GifApi = ({ gifName }) => {

    const { gifs, isLoading } = useFetchGifs( gifName );
    

    return (
        <>
            <h3 className='titulo'> {gifName} </h3>
            {
                isLoading ? <h2>Cargando...</h2> : null
            }
            <div className='card-grid'>
                {
                    gifs.map( ({title, id, url}) => {
                        return <GifCard key={id} title={title} url={url} />
                    })
                }
            </div>
        </>
    )
}
