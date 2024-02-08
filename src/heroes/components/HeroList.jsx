import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./";

export const HeroList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="flex gap-4 flex-wrap justify-center">
            {heroes.map(({ id, superhero }) => (
                <HeroCard key={id} id={id} superhero={superhero} />
            ))}
        </div>
    );
};
