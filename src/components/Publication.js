import React, { useContext, useEffect, useState } from 'react'
import Slider from 'react-slick'
import { BsFillHeartFill } from 'react-icons/bs'
import { InstagramContext } from '../context/InstragramProvider'
import { Spinner } from 'react-bootstrap'
import { slickSettings } from '../settings/index'


const Publication = () => {

	const { publications, user }= useContext( InstagramContext )
	const [ data, setData ] = useState([])

	useEffect( () => {

		if( publications.length > 0 ){

			setData( publications.filter( item => item.node.is_video === false ) )
		}
	}, [ publications ])

	console.log( data )

	return (
		
		<section className="publication">
			<h2 className="publication__title" id='publicaciones' >Publicaciones</h2>

			{
				publications.length === 0 
					? (

						<Spinner animation="grow" variant='primary' className='spin'/>
					)
					:(

						<Slider { ...slickSettings } >
							{
								data.map( item => (

									<div className="instagram-card" key={ item.node.id }>
										<div className="instagram-card__header">
											<img src={ user } alt="" className='instagram-card__header-user' />
											<p> { item.node.owner.username } </p>
										</div>

										<div className="instagram-card__body">
											<img src={ item.node.thumbnail_src } alt="" className='instagram-card__body-img' />
										</div>

										<div className="instagram-card__footer">
											<BsFillHeartFill className="ico-heart" />

											<span className="likes"> { item.node.edge_liked_by.count } Me gusta</span>
										</div>
									</div>
								))
							}
						</Slider>
					)
			}
		</section>
	)
}

export default Publication
