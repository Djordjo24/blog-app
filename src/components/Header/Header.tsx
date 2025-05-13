import "./Header.css";
import logo from "../../assets/images/logo.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction, useState } from "react";

interface HeaderProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ searchValue, setSearchValue }) => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleSearchClick = () => {
    setIsSearchBarOpen(true);
  };
  return (
    <header>
      <img className="logo" src={logo} alt="Blog logo" />
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/blogForm">WRITE</Link>
      </nav>
      <div className="searchBar">
        {isSearchBarOpen ? (
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearchChange}
          />
        ) : (
          <button className="search" onClick={handleSearchClick}>
            <FaSearch />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
