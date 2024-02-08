import { render, screen, fireEvent } from "@testing-library/react";
import { Hero } from "../../../src/heroes/pages/Hero";
import { MemoryRouter } from "react-router-dom";
import { getHeroeById } from "../../../src/heroes/helpers";

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

jest.mock('../../../src/heroes/helpers/getHeroeById')

describe('Test in componente <Hero/>', () => {

    beforeEach(() => jest.resetAllMocks());

    test('should match with snapshot', () => {

        getHeroeById.mockReturnValue({
            'id': 'dc-batman',
            'superhero': 'Batman',
            'publisher': 'DC Comics',
            'alter_ego': 'Bruce Wayne',
            'first_appearance': 'Detective Comics #27',
            'characters': 'Bruce Wayne'
        })

        const { container } = render(
            <MemoryRouter initialEntries={[`/hero/dc-batman`]}>
                <Hero />
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot();

    });

    test('when button is clicked should return once', () => {

        getHeroeById.mockReturnValue({
            'id': 'dc-batman',
            'superhero': 'Batman',
            'publisher': 'DC Comics',
            'alter_ego': 'Bruce Wayne',
            'first_appearance': 'Detective Comics #27',
            'characters': 'Bruce Wayne'
        })

        const { container } = render(
            <MemoryRouter initialEntries={[`/hero/dc-batman`]}>
                <Hero />
            </MemoryRouter>
        )

        const goBack = screen.getByTestId("goback-btn");
        fireEvent.click(goBack);
        
        expect( mockUseNavigate ).toHaveBeenCalledWith(-1, { replace: true })
    });
});