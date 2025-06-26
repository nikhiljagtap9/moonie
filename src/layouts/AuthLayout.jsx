import React, {useEffect} from 'react';
import AuthHeader from '../components/Header/AuthHeader';
import AuthFooter from '../components/Footer/AuthFooter';

const AuthLayout = ({ children }) => {
    useEffect(() => {
      const links = [
        'assets/home/css/plugins.css',
        'assets/home/css/style.css',
        'assets/home/css/templete.css',
        'assets/home/css/skin/skin-1.css',
        'assets/home/css/dark-layout.css',
      ];

      const jsFiles = [
      "assets/home/js/jquery.min.js",
      "assets/home/plugins/bootstrap/js/bootstrap.bundle.min.js",
      "assets/home/plugins/wow/wow.js",
      "assets/home/plugins/bootstrap-select/bootstrap-select.min.js",
      "assets/home/plugins/bootstrap-touchspin/jquery.bootstrap-touchspin.js",
      "assets/home/plugins/magnific-popup/magnific-popup.js",
      "assets/home/plugins/counter/waypoints-min.js",
      "assets/home/plugins/counter/counterup.min.js",
      "assets/home/plugins/imagesloaded/imagesloaded.js",
      "assets/home/plugins/masonry/masonry-3.1.4.js",
      "assets/home/plugins/masonry/masonry.filter.js",
      "assets/home/plugins/owl-carousel/owl.carousel.js",
      "assets/home/plugins/scroll/scrollbar.min.js",
      "assets/home/js/custom.js",
      "assets/home/js/dz.carousel.js",
      "assets/home/js/dz.ajax.js",
     // "assets/home/plugins/switcher/switcher.js"
    ];


      // Inject CSS
      const linkElements = links.map((href) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = process.env.PUBLIC_URL + '/' + href;
        document.head.appendChild(link);
        return link;
      });

      //Inject JS
      const scriptTags = jsFiles.map((src) => {
        const script = document.createElement('script');
        script.src = process.env.PUBLIC_URL + '/' + src;
        script.async = false; // to maintain load order
        document.body.appendChild(script);
        return script;
      });


      return () => {
        linkElements.forEach((link) => document.head.removeChild(link));
        scriptTags.forEach((script) => document.body.removeChild(script));
      };
    }, []);
  return(
  <>
    <AuthHeader />
    <main>{children}</main>
    <AuthFooter />
  </>
  )
};

export default AuthLayout;

      