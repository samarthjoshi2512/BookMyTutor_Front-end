import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const {token,setToken,userData} = useContext(AppContext)



  const logout = () => {
    setToken(null); // Clear token in state
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/'); // Redirect user to login page after logout
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 px-4 md:px-10 lg:px-20">
      {/* Logo */}
      <img
        onClick={() => navigate('/')}
        className="w-32 md:w-44 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />

      {/* Desktop Links */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `py-1 ${isActive ? 'border-b-2 border-primary text-primary' : 'text-gray-600'}`
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/teachers"
          className={({ isActive }) =>
            `py-1 ${isActive ? 'border-b-2 border-primary text-primary' : 'text-gray-600'}`
          }
        >
          ALL TEACHERS
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `py-1 ${isActive ? 'border-b-2 border-primary text-primary' : 'text-gray-600'}`
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `py-1 ${isActive ? 'border-b-2 border-primary text-primary' : 'text-gray-600'}`
          }
        >
          CONTACT
        </NavLink>
        <NavLink
          to="/feedback"
          className={({ isActive }) =>
            `py-1 ${isActive ? 'border-b-2 border-primary text-primary' : 'text-gray-600 '}`
          }
        >
          FEEDBACK
        </NavLink>
        <NavLink
          to="/syllabus"
          className={({ isActive }) =>
            `py-1 ${isActive ? 'border-b-2 border-primary text-primary' : 'text-gray-600'}`
          }
        >
          SYLLABUS
        </NavLink>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={userData.image} alt="Profile" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown Icon" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={() => navigate('my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={() => navigate('my-schedules')} className="hover:text-black cursor-pointer">My Schedules</p>
                <p onClick={logout} className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-6 py-2 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt="Menu Icon"
        />

        {/* Mobile Menu */}
        <div
          className={`${
            showMenu ? 'fixed' : 'hidden'
          } top-0 right-0 w-full h-full bg-white z-30 transition-all md:hidden`}
        >
          <div className="flex items-center justify-between px-5 py-6 border-b">
            <img
              onClick={() => navigate('/')}
              className="w-32 cursor-pointer"
              src={assets.logo}
              alt="Logo"
            />
            <img
              onClick={() => setShowMenu(false)}
              className="w-7 cursor-pointer"
              src={assets.cross_icon}
              alt="Close Menu"
            />
          </div>

          <ul className="flex flex-col items-center gap-4 mt-5 text-lg font-medium">
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded ${isActive ? 'bg-primary text-white' : 'text-gray-600'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/teachers"
              className={({ isActive }) =>
                `px-4 py-2 rounded ${isActive ? 'bg-primary text-white' : 'text-gray-600'}`
              }
            >
              All Teachers
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/about"
              className={({ isActive }) =>
                `px-4 py-2 rounded ${isActive ? 'bg-primary text-white' : 'text-gray-600'}`
              }
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/contact"
              className={({ isActive }) =>
                `px-4 py-2 rounded ${isActive ? 'bg-primary text-white' : 'text-gray-600'}`
              }
            >
              Contact
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/feedback"
              className={({ isActive }) =>
                `px-4 py-2 rounded ${isActive ? 'bg-primary text-white' : 'text-gray-600'}`
              }
            >
              Feedback
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/syllabus"
              className={({ isActive }) =>
                `px-4 py-2 rounded ${isActive ? 'bg-primary text-white' : 'text-gray-600'}`
              }
            >
              Syllabus
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
