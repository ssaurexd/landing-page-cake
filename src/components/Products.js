import React from 'react'
import ProductCard from './ProductCard'
import plat1 from '../assets/images/platillos/platillo1.jpg'
import plat2 from '../assets/images/platillos/platillo2.jpg'
import plat3 from '../assets/images/platillos/platillo3.jpg'
import plat4 from '../assets/images/platillos/platillo4.jpg'
import plat5 from '../assets/images/platillos/platillo5.jpg'
import plat6 from '../assets/images/platillos/platillo6.jpg'
import plat7 from '../assets/images/platillos/platillo7.jpg'
import plat8 from '../assets/images/platillos/platillo8.jpg'
import plat9 from '../assets/images/platillos/platillo9.jpg'
import plat10 from '../assets/images/platillos/platillo10.jpg'


const Products = () => {
	
	return (
		
		<section className='products' id='productos' >
			<h2 className='products__title' > Nuestros productos </h2>

			<div className="cards-container">
				<ProductCard 
					img={ plat1 }
					title='Titulo'
					description='Es el mejor ejemplo para regalar'
					price={ 57 }
				/>
				<ProductCard 
					img={ plat2 }
					title='Titulo'
					description='Es el mejor ejemplo para regalar'
					price={ 17 }
				/>
				<ProductCard 
					img={ plat3 }
					title='Titulo'
					description='Es el mejor ejemplo para regalar'
					price={ 127 }
				/>
				<ProductCard 
					img={ plat4 }
					title='Titulo'
					description='Es el mejor ejemplo para regalar'
					price={ 87 }
				/>
				<ProductCard 
					img={ plat5 }
					title='Titulo'
					description='Es el mejor ejemplo para regalar'
					price={ 97 }
				/>
				<ProductCard 
					img={ plat6 }
					title='Titulo'
					description='Es el mejor ejemplo para regalar'
					price={ 56 }
				/>
				<ProductCard 
					img={ plat7 }
					title='Titulo'
					description='Es el mejor ejemplo para regalar'
					price={ 81 }
				/>
				<ProductCard 
					img={ plat8 }
					title='Titulo'
					description='Es el mejor ejemplo para regalar'
					price={ 94 }
				/>
				<ProductCard 
					img={ plat9 }
					title='Titulo'
					description='Es el mejor ejemplo para regalar'
					price={ 100 }
				/>
				<ProductCard 
					img={ plat10 }
					title='Titulo'
					description='Es el mejor ejemplo para regalar'
					price={ 200 }
				/>
			</div>
		</section>
	)
}

export default Products
