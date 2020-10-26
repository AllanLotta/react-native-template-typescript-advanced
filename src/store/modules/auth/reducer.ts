import { AuthState, AuthAction } from './types';

const initialState: AuthState = {
	loadingSignInRequest: false,
	isSignedIn: true,
	error: false,
	token: null,
};

export default function auth(
	state = initialState,
	action: AuthAction,
): AuthState {
	switch (action.type) {
		case '@auth/SIGN_IN_REQUEST':
			return {
				...state,
				loadingSignInRequest: true,
				isSignedIn: !state.isSignedIn,
			};
		case '@auth/SIGN_IN_SUCCESS':
			return {
				...state,
				loadingSignInRequest: false,
				isSignedIn: true,
				token: action.payload.token,
			};
		case '@auth/SIGN_IN_FAILURE':
			return {
				...state,
				error: true,
			};
		default:
			return state;
	}
}
