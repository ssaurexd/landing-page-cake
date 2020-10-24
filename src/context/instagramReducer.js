import { types } from "./types";

export const initialState = {

	loading: false,
	msg: null,
	data: []
}

export const instagramReducer = ( state = initialState , action ) => {

	switch ( action.type ) {
		
		case types.instaStart:
			
			return{
				...state,
				loading: true
			}
		
		case types.instaSuccess:
			
			return{
				...state,
				loading: false,
				msg: null,
				data: action.payload
			}

		case types.instaFail:
		
			return{
				...state,
				loading: false,
				msg: 'Error al cargar las publicaciones'
			}
	
		default:
			return initialState
	}
}