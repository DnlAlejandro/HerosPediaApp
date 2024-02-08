import { HeroList } from "../components";

export const MarvelPage = () => {
    return (
        <div>
            <span className="text-red-500">Characters</span>
            <h1 className="text-4xl font-bold mb-3 text-red-700">
                Marvel Comics
            </h1>

            <HeroList publisher={"Marvel Comics"} />
        </div>
    );
};
