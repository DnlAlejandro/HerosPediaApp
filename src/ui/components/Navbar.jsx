import { useNavigate, Link, NavLink } from 'react-router-dom';
import { Avatar, Dropdown, DropdownItem } from 'flowbite-react';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useForm } from '../../hooks/useForm';
import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const MySwal = withReactContent(Swal)

export const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const navigate = useNavigate();

    const handleLogout = () => {

        logout();

        navigate('/login', {
            replace: true
        });
    }
    const handlePrueba = () => {
        console.log('a');
    }

    const handleSubmit = (event) => {

        event.preventDefault();

        if (searchText.trim().length <= 2) {
            MySwal.fire({
                icon: "error",
                title: "Oh, oh!",
                text: "Please insert at least one word",
                showConfirmButton: false,
                timer: 3000
            })

            return;
        };

        navigate(`/search?q=${searchText}`);

    }

    return (
        <nav className="bg-white border border-gray-200 gap-4 flex justify-between items-center text-sm py-2 px-10 font-bold">

            <Link
                className='font-["Consolas"] text-lg flex items-center gap-3 text-indigo-600 hover:text-indigo-500 py-2'
                to="/marvel"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>

                HerosApp
            </Link>

            <form
                className='relative hidden md:block w-96'
                onSubmit={handleSubmit}
            >
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search icon</span>
                </div>
                <button data-testid="search-btn" className="absolute inset-y-0 right-0 flex items-center pe-0.5" >
                    <div className='bg-slate-200 p-2 rounded-md border border-slate-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-slate-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                        </svg>
                    </div>
                    <span className="sr-only cursor-pointer">Search icon</span>
                </button>
                <input
                    type="text"
                    id="search-navbar"
                    className="block w-full p-2 ps-10 text-sm text-gray-600 border border-gray-300 outline-none rounded-lg ring-1 ring-white bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Search..."
                    name='searchText'
                    value={searchText}
                    onChange={onInputChange}
                    data-testid='input-search'
                />

            </form>

            <div className='flex gap-3'>
                <NavLink
                    className={({ isActive }) => `border py-2 px-6 w-24 text-center rounded-md hover:border-indigo-500 hover:text-indigo-600 ${(isActive) ? 'text-indigo-600 border-indigo-500 bg-indigo-200 shadow-md shadow-indigo-200' : 'text-slate-400 border-slate-300'}`}
                    to="/marvel"
                >
                    marvel
                </NavLink>

                <NavLink
                    className={({ isActive }) => `border py-2 px-6 w-24 text-center rounded-md hover:border-indigo-500 hover:text-indigo-600 ${(isActive) ? 'text-indigo-600 border-indigo-500 bg-indigo-200 shadow-md shadow-indigo-200' : 'text-slate-400 border-slate-300'}`}
                    to="/dc"
                >
                    dc
                </NavLink>

                {/* Dropdown menu */}
                <Dropdown
                    label={
                        <Avatar alt="User settings" img="/mylogo.png" rounded>
                            <div className="space-y-1 font-medium">
                                <div>{user}</div>
                            </div>
                        </Avatar>
                    }
                    aria-label='profile-button'
                    arrowIcon={false}
                    inline
                >
                    <DropdownItem><Link data-testid='logout-btn' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLogout}>Sign out</Link></DropdownItem>
                </Dropdown>
            </div>
        </nav>
    )
}