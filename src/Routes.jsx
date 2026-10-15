import PropTypes from 'prop-types';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

import Contacts from './pages/Contacts';



function AppRoutes({ language }) {
  return (
    <Routes>
      <Route path="/" element={<Home language={language} />} />
      <Route path="/portfolio" element={<Portfolio language={language} />} />
      <Route path="/about" element={<Navigate to="/portfolio" replace />} />
      <Route path="/contacts" element={ <Contacts />} />
    </Routes>
  );
}
AppRoutes.propTypes = { language: PropTypes.oneOf(['lt', 'en']).isRequired };
export default AppRoutes;
