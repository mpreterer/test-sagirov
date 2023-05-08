import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header />
      </div>
      <div className="layout__main">
        <Outlet />
      </div>
    </div>
  );
};

export { Layout };
