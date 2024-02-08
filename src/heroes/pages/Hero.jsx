import { useParams } from "react-router-dom";
import { getHeroeById } from "../helpers";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

export const Hero = () => {
    const { id } = useParams();

    const { superhero, publisher, alter_ego, first_appearance, characters } =
        useMemo(() => getHeroeById(id), [id]);

    const heroImageURL = `/heroes/${id}.jpg`;

    if (!superhero) {
        return <Navigate to="/marvel" />;
    }

    const navigate = useNavigate();

    const handleNavigateBar = () => {
        navigate(-1, {
            replace: true,
        });
    };

    return (
        <>
            <div className="flex gap-5">
                <div>
                    <img
                        src={heroImageURL}
                        className="rounded-lg h-full max-h-[70vh] min-w-72 hover:scale-105"
                        alt={superhero}
                    />
                    <h1 className="mt-4 font-bold text-3xl text-slate-600">
                        {superhero}
                    </h1>
                    <span
                        className={
                            publisher === "Marvel Comics"
                                ? "text-red-700"
                                : "text-blue-600"
                        }
                    >
                        {publisher}
                    </span>
                </div>
                <div className="w-full">
                    {alter_ego === characters ? (
                        <div className="my-5 shadow-md p-5 rounded-md">
                            <h4 className="font-semibold text-2xl text-indigo-600">
                                Alter Ego & Character
                            </h4>
                            <span className="text-sm text-slate-500">
                                {alter_ego}
                            </span>
                        </div>
                    ) : (
                        <div className="*:my-5 *:shadow-md *:p-5 *:rounded-md">
                            <div>
                                <h4 className="font-semibold text-2xl text-indigo-600">
                                    Alter Ego
                                </h4>
                                <span className="text-sm text-slate-500">
                                    {alter_ego}
                                </span>
                            </div>
                            <div>
                                <h4 className="font-semibold text-2xl text-indigo-600">
                                    Characters
                                </h4>
                                <span className="text-sm text-slate-500">
                                    {characters}
                                </span>
                            </div>
                        </div>
                    )}
                    <div className="shadow-md p-5 rounded-md">
                        <h4
                            className={`font-semibold text-2xl ${
                                publisher === "Marvel Comics"
                                    ? "text-red-700"
                                    : "text-blue-600"
                            }`}
                        >
                            First Appearance
                        </h4>
                        <span className="text-sm text-slate-500">
                            {first_appearance}
                        </span>
                    </div>
                    <button
                        className="bg-indigo-600 mt-4 text-white text-sm w-full h-12 rounded-md hover:bg-indigo-700"
                        onClick={handleNavigateBar}
                        data-testid="goback-btn"
                    >
                        Go back
                    </button>
                </div>
            </div>
        </>
    );
};
