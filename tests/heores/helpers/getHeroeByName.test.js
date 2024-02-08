import { getHeroeByName } from "../../../src/heroes/helpers";

describe('Pruebas a getHeroeByName', () => {
    test('debe de retornar el heroe', () => {
        const heroe = getHeroeByName('Cyclops');

        expect(heroe).toEqual([
            {
                "alter_ego": expect.any(String),
                "characters": expect.any(String),
                "first_appearance": expect.any(String),
                "id": expect.any(String),
                "publisher": expect.any(String),
                "superhero": expect.any(String)
            }
        ]);
    });
});