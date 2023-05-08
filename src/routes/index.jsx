import { Route, Routes } from 'react-router-dom';

import { Layout } from '../components/Layout/Layout';
import { LandingPage } from '../pages/LandingPage/LandingPage';
import { SCREENS } from './endpoints';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={SCREENS.LANDING} element={<LandingPage />} />
      </Route>
    </Routes>
  );
};

export { AppRoutes };