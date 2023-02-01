import React from 'react'

export const consultarApiClima = async(city, country) => {
    const apiKey = '699ff8e76407348d4e1b6677ff70194b';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

    const resp = await fetch(url);
    const {main: {temp, temp_max, temp_min}, name} = await resp.json();

   

    const  datos = {
        temperatura: parseInt(temp - 273.15),
        maxima: parseInt(temp_max - 273.15),
        minima: parseInt(temp_min - 273.15),
        nombre: name
    }

    return datos;

}
