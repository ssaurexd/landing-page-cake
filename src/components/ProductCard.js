import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { AiFillShopping} from 'react-icons/ai'
import { phone } from '../settings/index'


const ProductCard = ({ img, title, price, description }) => {

	const [ showModal, setShowModal ] = useState( false )
	const [ total, setTotal ] = useState( price )
	const [ units, setUnits ] = useState( 1 )
	const  [disableShop, setDisableShop ] = useState( false )
	const [ name, setName ] = useState('')
	const [ address, setAddress ] = useState('')

	useEffect( () => {

		setTotal( units * price )
	}, [ units , price ]) 
	
	useEffect( () => {

		if( total <= 0 || name.trim() === '' || address.trim() === '' ){
			setDisableShop( true )
		}
		else{
			setDisableShop( false )
		}
	}, [ total, setDisableShop, name, address ]) 

	const handleModal = () => {

		setShowModal( true )
	}
	const handleHideModal = () => {

		setShowModal( false )
		setUnits( 1 )
		setTotal( price )
	}
	
	return (

		<div className="product-card">
			<div className="card__header">
				<div className="card__header__info-container">
					<p className="price">${ price } </p>

					<AiFillShopping
						className='ico' 
						onClick={ handleModal }
					/>
				</div>

				<img src={ img } alt={ title } className='card__img' />
			</div>

			<div className="card__body">
				<Modal
					size='lg'
					show={ showModal }
					onHide={ handleHideModal }
					scrollable
				>
					<Modal.Header closeButton >
						<Modal.Title> { title } - Total: ${ total } </Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<img src={ img } alt={ title } />

						<label htmlFor="desc">Descripción: </label>
						<p id='desc'> { description } </p>
						
						<label htmlFor="price">Precio: </label>
						<p id='price'> ${ price } </p>
						
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text" id='units' >Cantidad: </span>
							</div>

							<input
								aria-label='Cantidad'
								aria-describedby='units'
								className='form-control' 
								id='units' 
								type="number"
								value={ units } 
								onChange={ e => setUnits( e.target.value ) }
							/>
						</div>

						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text" id='name' >Nombre: </span>
							</div>

							<input
								aria-label='Nombre'
								aria-describedby='name'
								className='form-control' 
								placeholder='Juanito'
								id='name'
								type="text"
								value={ name }
								onChange={ e => setName( e.target.value ) }
							/>
						</div>

						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text" id='address' >Dirección: </span>
							</div>

							<input 
								aria-label='Dirección'
								aria-describedby='address'
								className='form-control' 
								id='address'
								type="text"
								placeholder='Col. ejemlo C. calle #47'
								value={ address }
								onChange={ e => setAddress( e.target.value ) }
							/>						
						</div>
					</Modal.Body>

					<Modal.Footer>

						<a 
							className='btn btn-info btn-block'
							href={ 
								'https://api.whatsapp.com/send?phone=' + phone +
								'&text=¡Hola!%20¿Aún%20está%20dispoble?%20' + 
								'*Producto:*%20' + title 
							} 
							target='_blanck'
						>
							Preguntar por existencias
						</a>

						<a 
							className={ disableShop ? 'disableLink btn btn-primary btn-block' : 'btn btn-primary btn-block' }
							target='_blanck'
							href={
								'https://api.whatsapp.com/send?phone=' + phone +
								'&text=!Hola¡%20¿Me%20puedes%20enviar%20el%20siguiente%20producto?' + '%0D%0A' +
								'*-------Datos------*' + '%0D%0A' +
								'Producto:%20' + title.trim() + '%0D%0A' +
								'Cantidad:%20' + units + '%0D%0A' +
								'Nombre:%20' + name.trim() + '%0D%0A' +
								'Dirección:%20' + address.trim() + '%0D%0A' +
								'*Total%20a%20pagar:*%20' + total
							}
						>
							Pedir
						</a>
					</Modal.Footer>

				</Modal>
			</div>

			<div className="card__footer">
				<div className="card__footer-title">
					<h3> { title } </h3>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
