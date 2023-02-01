import { useState } from "react"

export const ClimaInput = ({ onCityAndCountry }) => {
    const [input, setInput] = useState('');
    const [select, setSelect] = useState('');

    const onInputChange = (e) => {
        setInput(e.target.value);
    };

    const onChangeSelect = (e) => {
        setSelect(e.target.value)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if( input <= 1 ) return;


        onCityAndCountry( input, select );
        setInput('');

    };
    return (
        <>
            <form onSubmit={ onSubmit } >
                <input className="input-clima" type="text" placeholder="Escribe tu ciudad" value={input} onChange={onInputChange} />
                <select onChange={ onChangeSelect } className="select-clima">
                    <option selected={true} disabled={true}>Seleccione</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="PE">Perú</option>
                </select>
                <input className="submit-clima" type="submit" value="OBTENER CLIMA" />
            </form>
        </>
  )
}
