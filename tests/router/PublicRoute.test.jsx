import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PublicRoute } from "../../src/router/PublicRoute";
import { MemoryRouter, Routes, Route } from "react-router-dom";

describe('Pruebas en <PublicRoute/>', () => {

    test('debe de mostrar el children si no esta autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        screen.debug()

        expect(screen.getByText('Ruta publica')).toBeTruthy();
    });

    test('debe de navegar si está autenticado', () => {
        const contextValue = {
            logged: true,
            name: 'coofcoding'
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        } />
                        <Route path='marvel' element={<h1>Pagina Marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText('Pagina Marvel') ).toBeTruthy();
    })

});