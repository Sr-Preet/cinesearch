import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidCameraMovie } from 'react-icons/bi';
import MovieContext from '../context/movie/MovieContext';
import { CLEAR_SEARCH } from '../context/movie/movieTypes';
import Auth from '../utils/auth';

function Navbar() {
  const { dispatch } = useContext(MovieContext);

  const handleLogout = () => {
    dispatch({type: 'CLEAR_SEARCH'});

    Auth.logout();
  }

  return (
    <nav className="flex justify-between items-center my-4">
      <div>
        <Link
          to="/"
          className="flex items-center text-3xl"
          onClick={() => dispatch({ type: CLEAR_SEARCH })}
        >
          <BiSolidCameraMovie className="inline mr-1" />
          CineSearch
        </Link>
      </div>

      <ul className="mt-2">
        {!Auth.isLoggedIn() ? (
          <>
            <li className="inline mr-6">
              <Link to="/register">Sign Up</Link>
            </li>

            <li className="inline">
              <Link to="/login">Login</Link>
            </li>
          </>
        ) : (
          <>
            <li className="inline mr-6">
              <Link to="/profile">
                Profile
              </Link>
            </li>

            <li className="inline">
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
