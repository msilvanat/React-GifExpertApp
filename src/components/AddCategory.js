import React, { useState } from 'react'

import { PropTypes } from 'prop-types';

export const AddCategory = ({ setCategories }) => { //se destructuran los argumentos del componente

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validación //trim borra los espacios en blanco antes y después
        if (inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats, ] );
            setInputValue('');
        }

    }
    return (

        <form onSubmit={handleSubmit}>

            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}  // se dispara cada vez que la caja de texto cambie, la e es el evento 

            />

        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired

}
