import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => {

    const initialState = {
        logged: false
    }

    test('debe de retornar el estado por defecto', () => {
        
        const newState = authReducer( initialState, {} );

        expect(Object.is(newState, initialState)).toBe(true);

    });

    test('debe de (login) llamar el login atenticar y establecer el username', () => {

        const action = {
            type: types.login,
            payload: 'coofcoding'
        }

        const newState = authReducer( initialState, action );

        expect( newState ).toEqual({
            logged: true,
            user: action.payload
        })
        
    });

    test('debe de (logout) borrar el name del usuario y logged en false', () => {
        
        const action = {
            type: types.login,
            payload: 'coofcoding'
        }

        const newState = authReducer( initialState, action );
        const logoutState = authReducer( newState, { type: types.logout } );

        expect( logoutState ).toEqual( initialState );
    });
});