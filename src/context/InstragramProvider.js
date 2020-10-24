import React,  { createContext, useEffect, useState } from 'react'
import { instagramUrl } from '../settings/index'


export const InstagramContext = createContext() 

export const InstragramProvider = ( props ) => {

	const [ publications, setPublications ] = useState([])
	const [ user, setUser ] = useState('')

	const getInstagram = async () => {

		const resp = await fetch( instagramUrl )
		const data = await resp.json()

		setPublications( data.graphql.user.edge_owner_to_timeline_media.edges )
		setUser( data.graphql.user.profile_pic_url )
	}

	useEffect( () => {

		getInstagram()
	}, [])

	return (
		<InstagramContext.Provider value={{ publications, user }} >
			{ props.children }
		</InstagramContext.Provider>
	)
}

