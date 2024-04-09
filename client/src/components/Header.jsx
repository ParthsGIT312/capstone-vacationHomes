import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector(state => state.user)
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };


  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);




  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

  }




  return (

    <header className="bg-slate-200 shadow-md">
      <div className="max-w-6xl mx-auto p-3 flex justify-between items-center">

        {/* Logo and Brand Name */}
        <Link to="/" className="text-lg sm:text-xl font-bold flex items-center text-gray-800">
          <span className="text-blue-500">Vacation</span>
          <span className="text-green-500 ml-1">Homes</span>
        </Link>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="bg-slate-100 p-3 rounded-lg flex items-center flex-grow ml-4 sm:ml-8 md:ml-16">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none flex-grow w-24 sm:w-64 md:w-44 text-sm text-gray-800"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="ml-2">
            <FaSearch className="text-slate-600" />
          </button>
        </form>

        {/* Navigation Links */}
        <ul className="hidden sm:flex gap-4 items-center ml-12">

          {/* Home Link */}
          <li>
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
          </li>

          {/* About Link */}
          <li>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
          </li>

          {/* Profile or Sign In */}
          <li>
            <Link to="/profile" className="text-gray-700 hover:text-gray-900 flex items-center">
              {currentUser ? (
                <img
                  className="rounded-full h-7 w-7 object-cover mr-2"
                  src={currentUser.avatar}
                  alt="profile"
                />
              ) : (
                <span className="text-sm">Sign in</span>
              )}
            </Link>
          </li>

        </ul>

        {/* Mobile Menu Icon (Hamburger) - Shown on small screens */}
        <div className="sm:hidden">
          {/* Replace with your mobile menu button/icon */}
          <button
            className="text-gray-800 focus:outline-none p-2"
            aria-label="Toggle Mobile Menu"
            onClick={handleMobileMenuToggle}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6" /> // Close icon when menu is open
            ) : (
              <FaBars className="h-6 w-6" /> // Hamburger icon when menu is closed
            )}
          </button>
        </div>






        {/* Mobile Menu (shown when isMobileMenuOpen is true) */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-slate-200 p-4">
          {/* Mobile Menu Items */}
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-gray-900">
                About
              </Link>
            </li>
            <li>
              <Link to="/profile" className="text-gray-700 hover:text-gray-900">
                {currentUser ? (
                <img
                  className="rounded-full h-7 w-7 object-cover mr-2"
                  src={currentUser.avatar}
                  alt="profile"
                />
              ) : 'Sign in'}
              </Link>
            </li>
          </ul>
        </div>
      )}




      </div>
    </header>


  )
}
