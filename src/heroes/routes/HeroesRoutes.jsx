import { Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { Route } from "react-router-dom";
import { DcPage, Hero, MarvelPage, SearchPage } from "../pages";
import { Navigate } from "react-router-dom";

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="px-20 py-5">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />

                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:id" element={<Hero />} />

                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    );
};
