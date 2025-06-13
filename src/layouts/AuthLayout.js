import React from 'react';
import AuthHeader from '../components/Header/AuthHeader';
import AuthFooter from '../components/Footer/AuthFooter';

const AuthLayout = ({ children }) => (
  <>
    <AuthHeader />
    <main>{children}</main>
    <AuthFooter />
  </>
);

export default AuthLayout;
