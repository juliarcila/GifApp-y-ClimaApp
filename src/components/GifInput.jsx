import { useState } from "react"

export const GifInput = ({ onGifArrayFunction }) => {

    const [inputValue, setInputValue] = useState('');

    const onChangeInput = (e) => {
        setInputValue( e.target.value )
        // console.log(input);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length <= 1){
            return;
        }
    
        onGifArrayFunction( inputValue.trim() );
        setInputValue('');
    };

  return (
    <form onSubmit={ onSubmit }>
        <input 
            className="input-gif"
            type="text"
            placeholder="Escriba el gif a buscar" 
            value={ inputValue }
            onChange={ onChangeInput }
            />
    </form>
  )
}
