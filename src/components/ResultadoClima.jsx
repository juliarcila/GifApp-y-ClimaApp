
export const ResultadoClima = ({datos: {temperatura, maxima, minima, nombre}}) => {
  return (
    <>
        <h2 className="subtitulo-clima">Clima en la ciudad de {nombre}</h2>
        <div className="clima-grid">
              <p>{`${temperatura} °C`}</p>
              <p>Max: {maxima} °C</p>
              <p>Min: {minima} °C</p>
        </div>
    </>
  )
}
