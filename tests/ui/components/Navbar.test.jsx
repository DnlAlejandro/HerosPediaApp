import { render, screen, fireEvent } from "@testing-library/react";
import { AuthContext } from "../../../src/auth";
import { MemoryRouter } from "react-router-dom";
import { Navbar } from '../../../src/ui/components/Navbar';
import { act } from "react-dom/test-utils";

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}))

describe('Pruebas en <Navbar/>', () => {

    const contextValue = {
        logged: true,
        user: 'KevinsitoUwU',
        logout: jest.fn(),
    }

    beforeEach(() => jest.clearAllMocks());

    test('debe de mostrar el nombre del usuario', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText(contextValue.user)).toBeTruthy();

    });

    test('debe de llamar el logout y navigate cuando se hace click en el botón', async () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const buttonElement = screen.getByTestId('flowbite-avatar');

        await act(async () => {
            fireEvent.click(buttonElement);
        })

        const logoutElementBTN = screen.getByTestId('logout-btn');

        await act( async() => {
            fireEvent.click(logoutElementBTN);
        })
        
        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockUseNavigate ).toHaveBeenCalledWith('/login', {"replace": true});

    })
});