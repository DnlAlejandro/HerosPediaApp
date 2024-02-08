import { getHeroeById } from "../../../src/heroes/helpers";

describe('Pruebas a getHeroeById', () => {
    test('debe de retornar el heroe', () => {
        const heroe = getHeroeById('dc-superman');

        expect(heroe).toEqual({
            "alter_ego": expect.any(String),
            "characters": expect.any(String),
            "first_appearance": expect.any(String),
            "id": expect.any(String),
            "publisher": expect.any(String),
            "superhero": expect.any(String)
        });
    });
});