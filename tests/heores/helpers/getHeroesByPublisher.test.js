import { getHeroesByPublisher } from "../../../src/heroes/helpers";

describe('Pruebas a getHeroesByPublisher', () => {
    test('debe de retornar todos los heroes de Marvel Comics', () => {
        const heroes = getHeroesByPublisher('Marvel Comics');

        expect(heroes).toHaveLength(10);
    });
    test('debe de retornar todos los heroes de DC Comics', () => {
        const heroes = getHeroesByPublisher('DC Comics');

        expect(heroes).toHaveLength(10);
    });
});