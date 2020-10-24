import React from 'react'


const Navbar = () => {
	
	return (
		
		<nav>
			<h1 className='logo'>Romanher</h1>
			<input type='checkbox' id='hamburger-toggle'/>

			<label htmlFor='hamburger-toggle' className='hamburger' >
				<span className='bar' ></span>
			</label>

			<ul className='nav-list' >
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
	)
}

export default Navbar
