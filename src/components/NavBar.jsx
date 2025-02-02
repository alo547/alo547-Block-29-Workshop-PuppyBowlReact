import { useState } from 'react';

function NavBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

    return (
        <nav className="p-4 bg-gray-200">
            <input
                type="text"
                placeholder="Search players"
                value={searchTerm}
                onChange={handleInputChange}
                className="p-2 border rounded mr-2"
            />
            <button onClick={handleSearchClick} className="p-2 bg-blue-500 text-white rounded">
                Search
            </button>
        </nav>
    );
}

export default NavBar;