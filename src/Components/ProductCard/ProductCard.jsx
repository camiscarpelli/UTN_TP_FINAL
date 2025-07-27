import React from "react"

function ProductCard ({nombre, precio}){
    return(
        <div>
            <h2>{nombre}</h2>
            <span>El precio de mi producto es ${precio - (precio *0.21)}</span>
    </div>
    )
}

export default ProductCard