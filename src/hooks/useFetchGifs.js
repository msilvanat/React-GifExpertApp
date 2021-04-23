//El hook no necesariamente devuelve un componente y el functional component si devuelve un componente 

import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });


    //Los efectos no pueden ser asíncronos porque esperan algo síncrono
    useEffect(() => {

        getGifs(category)  //petición http
            .then(imgs => {

                    setState({  //dispara una renderización en el componente
                        data: imgs,
                        loading: false
                    });
            })

    }, [category])


    return state; // {data:[], loading:true};


}