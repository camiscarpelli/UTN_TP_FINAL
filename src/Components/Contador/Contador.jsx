import React from 'react'

const Contador = () => {

	const [contador, setContador] = useState(0)

	const incrementar = () => {
		setContador(contador + 1)
	}

	const decrementar = () => {
		setContador(contador - 1)
	}
	console.log('Me cargue')
    return (
        <div>
            <button onClick={decrementar}>-</button>
            <span>{contador}</span>
            <button onClick={incrementar}>+</button>
        </div>
    )
}

export default Contador