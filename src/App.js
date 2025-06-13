import React, {useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const location = useLocation();
  const isAuth = location.pathname.startsWith('/auth');
  useEffect(() => {
  // Define all stylesheets for main and auth layout
  const styles = isAuth
    ? ['/assets/css/auth.css']
    : [
        'https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap',
        '/assets/fonts/phosphor/duotone/style.css',
        '/assets/fonts/tabler-icons.min.css',
        '/assets/fonts/feather.css',
        '/assets/fonts/fontawesome.css',
        '/assets/fonts/material.css',
        '/assets/css/style.css',
        '/assets/css/style-preset.css',
        '/assets/css/plugins/dataTables.bootstrap5.min.css',
      ];

    const links = styles.map((href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
      return link;
  });


  // JavaScript files (footer scripts)
    // const scripts = isAuth
    //   ? []
    //   : [
    //       '/assets/js/plugins/popper.min.js',
    //       '/assets/js/plugins/simplebar.min.js',
    //       '/assets/js/plugins/bootstrap.min.js',
    //       '/assets/js/plugins/i18next.min.js',
    //       '/assets/js/plugins/i18nextHttpBackend.min.js',
    //       '/assets/js/icon/custom-font.js',
    //        '/assets/js/script.js',
    //       '/assets/js/theme.js',
    //       '/assets/js/multi-lang.js',
    //       '/assets/js/plugins/feather.min.js',
    //     ];

    // const scriptTags = scripts.map((src) => {
    //   const script = document.createElement('script');
    //   script.src = src;
    //   script.defer = true;
    //   document.body.appendChild(script);
    //   return script;
    // });

  return () => {
    // Cleanup styles
    links.forEach(link => document.head.removeChild(link));

    // Cleanup scripts
   // scriptTags.forEach(script => document.body.removeChild(script));
  };
}, [isAuth]);

  return (

      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />

        {/* Main Routes */}
        <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
      </Routes>
  );
}

export default App;
