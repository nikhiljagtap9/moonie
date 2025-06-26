import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainLayout = ({ children }) => {
  useEffect(() => {
    const links = [
      'assets/fonts/phosphor/duotone/style.css',
      'assets/fonts/tabler-icons.min.cs',
      'assets/fonts/feather.css',
      'assets/fonts/fontawesome.css',
      'assets/fonts/material.css',
      'assets/css/style.css',
      'assets/css/style-preset.css',
      'assets/css/plugins/dataTables.bootstrap5.min.css',
      'assets/fonts/phosphor/duotone/style.css'
    ];

    // const jsFiles = [
    //   'assets/js/plugins/popper.min.js',
    //   'assets/js/plugins/simplebar.min.js',
    //   'assets/js/plugins/bootstrap.min.js',
    //   'assets/js/plugins/i18next.min.js',
    //   'assets/js/plugins/i18nextHttpBackend.min.js',
    //   'assets/js/icon/custom-font.js',
    //   'assets/js/script.js',
    //   'assets/js/theme.js',
    //   'assets/js/multi-lang.js',
    //   'assets/js/plugins/feather.min.js',
    // ];

    // Inject CSS
    const linkElements = links.map((href) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = process.env.PUBLIC_URL + '/' + href;
      document.head.appendChild(link);
      return link;
    });

     // Inject JS
    // const scriptTags = jsFiles.map((src) => {
    //   const script = document.createElement('script');
    //   script.src = process.env.PUBLIC_URL + '/' + src;
    //   script.async = false; // to maintain load order
    //   document.body.appendChild(script);
    //   return script;
    // });

    return () => {
      linkElements.forEach((link) => document.head.removeChild(link));
    //  scriptTags.forEach((script) => document.body.removeChild(script));
    };
  }, []);

  return (
    <>
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
