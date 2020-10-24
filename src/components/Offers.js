import React from 'react'
import { Carousel } from 'react-bootstrap'
import offerImg1 from '../assets/images/offers/offer1.jpg'
import offerImg2 from '../assets/images/offers/offer2.jpg'
import offerImg3 from '../assets/images/offers/offer3.jpg'
import offerImg4 from '../assets/images/offers/offer4.jpg'


const Offers = () => {

	return (

		<section className='offers' id='novedades' >
			<h2 className='offers__title' >
				Novedades 
			</h2>
			
			<div className="offers__carousel">
				<div className="custom-shape-divider-top-1603420794">
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
					</svg>
				</div>
			
				<Carousel
					controls={ false } 
					touch
				>
					<Carousel.Item interval={ 5000 }>
						<img src={ offerImg1 } alt="Novedad 1"  className="d-block w-100" />

						<Carousel.Caption>
							<h3>Novedad 1</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item interval={ 5000 }>
						<img src={ offerImg2 } alt="Novedad 2"  className="d-block w-100" />

						<Carousel.Caption>
							<h3>Novedad 2</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item interval={ 5000 }>
						<img src={ offerImg3 } alt="Novedad 3"  className="d-block w-100" />

						<Carousel.Caption>
							<h3>Novedad 3</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>

					<Carousel.Item interval={ 5000 }>
						<img src={ offerImg4 } alt="Novedad 4"  className="d-block w-100" />

						<Carousel.Caption>
							<h3>Novedad 4</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div> 
		</section>
	)
}

export default Offers
