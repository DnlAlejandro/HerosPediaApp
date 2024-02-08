import { Link } from "react-router-dom";

export const HeroCard = ({ id, superhero }) => {

    const heroImageURL = `./heroes/${id}.jpg`;

    return (
        <div className="shadow-md p-6 rounded-md flex flex-col flex-wrap w-64 animate__animated animate__fadeIn">
            <div className='relative'>
                <img src={heroImageURL} data-testid="hero-image" className="rounded-md mb-3 z-40" alt={id} />
                <img src={heroImageURL} className="rounded-md mb-3 absolute top-0 -z-40 blur-sm" alt={id} />
            </div>
            <span className="font-bold text-slate-700 text-xl">{superhero}</span>

            <Link to={`/hero/${id}`} className="mt-3 bg-gradient-to-r from-indigo-500 to-blue-400 hover:from-red-500 hover:to-pink-500 w-fit py-2 px-4 text-xs font-normal text-white rounded-md">
                see more...
            </Link>

        </div>
    )
}
