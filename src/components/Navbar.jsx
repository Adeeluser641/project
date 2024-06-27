
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">Home</Link>
        <div>
          <Link to="/about" className="text-white mx-2">About</Link>
          <Link to="/contact" className="text-white mx-2">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
