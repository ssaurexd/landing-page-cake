import React, { useEffect, useState } from 'react'
import { phone } from '../settings/index'


const Gifts = () => {

	const [ giftName, setGiftName ] = useState('')
	const [ giftAddress, setGiftAddress ] = useState('')
	const [ giftPhone, setGiftPhone ] = useState('')
	const [ giftDescription, setGiftDescription ] = useState('')
	const [ disableGift, setDisableGift ] = useState( true )

	useEffect( () => {

		if( 
			giftName.trim() === '' || 
			giftAddress.trim() === '' || 
			giftPhone.trim()  === '' || 
			giftDescription.trim() === '' 
		){

			setDisableGift( true )
		}
		else{
			
			setDisableGift( false )
		}
	}, [ giftName, giftAddress, giftPhone, giftDescription ])

	return (
		
		<div className="gift">
			<h2 id='regalos' className="gift__title">Ordenar regalo especial</h2>

			<form className='gift-form' >

				<div className="group">
					<input 
						id='gift-name'
						type="text"
						placeholder='Nombre'
						value={ giftName }
						onChange={ e => setGiftName( e.target.value ) }
					/>

					<input 
						id='gift-phone'
						type="text"
						placeholder='Numero de telefono'
						value={ giftPhone }
						onChange={ e => setGiftPhone( e.target.value ) }
					/>
				</div>

				<input
					id='gift-address' 
					type="text"
					placeholder='Direccion'
					value={ giftAddress }
					onChange={ e => setGiftAddress( e.target.value ) }
				/>
				
				<textarea 
					name="" 
					id="" 
					cols="10" 
					rows="10"
					placeholder='Descripcion'
					value={ giftDescription }
					onChange={ e => setGiftDescription( e.target.value ) }
				>

				</textarea>

				<a 
					className={ disableGift ? 'btn btn-block btn-info disableLink' : 'btn btn-block btn-info' }
					href={
						'https://api.whatsapp.com/send?phone=' + phone +
						'&text=!Hola¡%20¿Me%20puedes%20hacer%20el%20siguiente%20producto?' + '%0D%0A' +
						'Descripción:%20' + giftDescription + '%0D%0A' +
						'Para:%20' + giftName + '%0D%0A' +
						'Celular:%20' + giftPhone + '%0D%0A' +
						'Dirección:%20' + giftAddress.trim() + '%0D%0A' 
					}
					target='_black'
				>
					Ordenar
				</a>
			</form>
		</div>
	)
}

export default Gifts
