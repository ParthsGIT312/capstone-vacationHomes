import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector(state => state.user)
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

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








  return (


    <header className='bg-slate-200 shadow-md '>
      <div className='max-w-6xl mx-auto p-3 flex justify-between items-center'>



        <Link to="/" className="text-lg sm:text-xl font-bold flex items-center text-gray-800">

          <h1 className='font-bold text-sm sm:text-lg flex-wrap'>
            <span className='text-blue-500 font-bold'>Vacation</span>
            <span className='text-green-500 font-bold'>Homes</span>
          </h1>

        </Link>

        <form onSubmit={handleSubmit} className='bg-slate-100 p-3 rounded-lg flex items-center'>

          <input type="text" placeholder='search...' className='bg-transparent focus:outline-none flex-grow w-24 sm:w-64 md:w-44 text-sm text-gray-800' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />


          <button className="ml-2">
            <FaSearch className='text-slate-600' />
          </button>

        </form>


        <ul className="hidden sm:flex gap-4 items-center">


          <Link to="/" className="text-gray-700 hover:text-2xl">
            <li >Home</li>
          </Link>

          <Link to="/about">
            <li className="text-gray-700 hover:text-2xl">About</li>
          </Link>


          <Link to='/profile' className="text-gray-700 hover:text-gray-900 flex items-center">
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>



        </ul>

      </div>



    </header>

  )
}
