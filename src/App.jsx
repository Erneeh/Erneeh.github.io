import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import AppRoutes from './Routes';

export default function AppWrapper() {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'lt';
    } catch {
      return 'lt';
    }
  });

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem('portfolio-language', language);
    } catch { /* The language switch also works when storage is unavailable. */ }
  }, [language]);

  return (
    <Router>
      <NavigationBar language={language} setLanguage={setLanguage} AppRoutes={<AppRoutes language={language} />} />
    </Router>
  );
}
