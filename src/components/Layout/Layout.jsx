import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <Icon name="icon-logo" height={16} width={136} />
        </Link>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
