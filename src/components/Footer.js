import React from 'react'
import { phone } from '../settings/index'
import fb from '../assets/images/socials/facebook.png'
import gm from '../assets/images/socials/gmail.png'
import ig from '../assets/images/socials/instagram.png'
import ws from '../assets/images/socials/whatsapp.png'


const Footer = () => {
	
	return (
		
		<footer>
			<div class="custom-shape-divider-top-1603557833">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
				</svg>
			</div>

			<div className="contact">
				<h1 className='logo'>Romanher</h1>

				<div className='data' >
					<p>
						<span>Tel: </span>
						498329832983
					</p>

					<p>
						<span>Email: </span>
						ssaurexd@gmail.com
					</p>

					<p>
						<span>Git: </span>
						www.github.com/ssaurexd
					</p>
				</div>
				
				<span className="rights">&copy; All rights reserve 2020</span>
			</div>

			<div className="social-network">
				<h3>Redes sociales</h3>
				
				<div className="social-container">
					<a 
						href="https://www.facebook.com/sanji.sand.9/" 
						target='_black' 
						className='link' 
						alt-
					>
						<img alt='img' src={ fb }/>
					</a>

					<a 
						href="https://www.instagram.com/ssanjisand/" 
						target='_black'
						className='link' 
						alt-
					>
						<img alt='img' src={ ig }/>
					</a>

					<a 
						href="mailto:ssaurexd@gmail.com"
						target='_black'
						className='link' 
						alt-
					>
						<img alt='img' src={ gm }/>
					</a>

					<a 
						href={ 'https://api.whatsapp.com/send?phone=' + phone } 
						target='_black'
						className='link' 
						alt-
					>
						<img alt='img' src={ ws }/>
					</a>
				</div>
			</div>

			<div className="mininav">
				<h3>Menu</h3>

				<nav className='mininav__nav' >
					<ul className='mininav__nav-list' >
						<li>
							<a href="#novedades">Novedades</a>
						</li>
						
						<li>
							<a href="#publicaciones">Publicaciones</a>
						</li>
						
						<li>
							<a href="#productos">Productos</a>
						</li>
						
						<li>
							<a href="#regalos">Regalos</a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	)
}

export default Footer
