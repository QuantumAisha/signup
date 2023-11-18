// components/Navigation.js
import Link from 'next/link';

const Navigation = () => {
  return (
    <ul className="nav">
      <li>
        <Link href="/Home">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/About">
          <a>About</a>
        </Link>
      </li>
      <Link href="/Signup">
          <a>Signup</a>
        </Link>
      {/* Add your other navigation items here */}
    </ul>
  );
};

export default Navigation;
