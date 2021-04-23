import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Code']);

    //Función para agregar un nuevo elemento a la lista con el operador spread 
    //const handleAdd = () => {
    //setCategories( [...categories, 'HunterXHumter' ] ); ésta es una forma válida
    //    setCategories( cats => [...cats, 'HunterXHunter'] );
    //La instrucción para añadir un elemento es mediante setCategory
    //}

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>

                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category} //regresamos un objeto 
                        />
                    ))
                }
            </ol>

        </div>
    )
}
