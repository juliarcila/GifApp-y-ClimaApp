import React from 'react'
import ReactDOM from 'react-dom/client'
import { ClimaApp } from './ClimaApp'
import { Footer } from './Footer'
import { GifExpertApp } from './GifExpertApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* App de busqueda de gifs */}
    <GifExpertApp />

    {/* App de busqueda del clima  */}
    <ClimaApp />

    {/* Agregando un footer */}
    <Footer />
  </React.StrictMode>,
)
