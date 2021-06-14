import React from 'react'
import {useRouter} from 'next/router';

const ProductItem = () => {
    const {query:{id}} = useRouter();

    return (
        <div>
           <h1>Esta es la pagina solo por prueba del producto {id}</h1>
        </div>
    )
}

export default ProductItem;
