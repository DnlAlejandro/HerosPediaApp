import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";
import { AuthContext } from "../../../src/auth";
import { PrivateRoute } from "../../../src/router/PrivateRoute";
import { HeroesRoutes } from "../../../src/heroes";
import { act } from "react-dom/test-utils";

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
    
}))

describe('Prueba en <SearchPage/>', () => {

    
    const contextValue = {
        logged: true,
        name: 'coofcoding'
    }

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrarse correctamente con valores por defecto', () => {
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();
    });

    test('debe de mostrarse a batman y el input con el valor del queryString', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const input = screen.getByTestId('input-search');
        const img = screen.getByTestId('hero-image');

        expect(input.value).toBe('batman');
        expect(img.src).toContain('/heroes/dc-batman.jpg');
    });

    test('debe de mostrarse el alert de buscar un heroe', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search']}>
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const alertSearch = screen.getByTestId('search-info');

        expect(alertSearch).toBeTruthy();
    });

    test('debe de mostrarse el alert de no encontrado', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search?q=myheroe']}>
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const alertNotFound = screen.getByTestId('notfound-info');

        expect(alertNotFound).toBeTruthy();
    });

    test('debe de llamar el navigate a la pantalla nueva', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search']}>
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const input = screen.getByTestId('input-search');
        const button = screen.getByTestId('search-btn');

        act(() => {

            // changing the value of the input field
            fireEvent.change(input, { target: { value: 'superman' } });

            fireEvent.click(button);
        })

        expect( mockUseNavigate ).toHaveBeenCalledWith(`/search?q=${input.value}`);
    })
});