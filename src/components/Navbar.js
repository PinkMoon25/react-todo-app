import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [{
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 2,
    path: '/about',
    text: 'About',
  },
  ];

  return (
    <nav className="navBar">
      {links.map((link) => (
        <li key={link.id}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </nav>
  );
};

export default Navbar;
