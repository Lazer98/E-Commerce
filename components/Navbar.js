// Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul>
      <li className="mr-4">
          <Link href="/">Home</Link>
        </li>
        <li className="mr-4">
          <Link href="/Register">Register</Link>
        </li>
        <li className="mr-4">
          <Link href="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
