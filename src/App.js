import React from 'react'
//
import Footer from './components/Footer'
import Gifts from './components/Gifts'
import MainBanner from './components/MainBanner'
import Navbar from './components/Navbar'
import Offers from './components/Offers'
import Products from './components/Products'
import Publication from './components/Publication'
import { InstragramProvider } from './context/InstragramProvider'


const App = () => {

	return (
		<InstragramProvider >
			<Navbar />

			<main>
				<MainBanner 
					title='Pasteleria, Bebidas y Regalos'
					slogan='Hechos con amor y esfuerzo'
				/>
				
				<Offers />

				<Products />

				<Publication />

				<Gifts />

				<Footer />
			</main>
		</InstragramProvider>
	)
}

export default App
