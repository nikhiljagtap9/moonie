import React, {useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import Home from './pages/Home';

import Welcome from './pages/Welcome';
import CreateApp from './pages/CreateApp';
import Listing from './pages/Listing';
import Dashboard from './pages/Dashboard';
import PaymentLink from './pages/PaymentLink';
import Transactions from './pages/Payments/Transactions';
import Methods from './pages/Payments/Methods';
import ConnectMethod from './pages/Payments/ConnectMethod';
import PayoutTransactions from './pages/Payouts/PayoutTransactions';
import PayoutMethods from './pages/Payouts/PayoutMethods';
import PayoutConnectMethod from './pages/Payouts/PayoutConnectMethod';
import UpdateKYC from './pages/UpdateKYC';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';

function App() {

  return (

      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<AuthLayout><Home /></AuthLayout>} />
        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        
        <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />

        {/* Main Routes */}
        <Route exact path="/logout" element={<Logout/>} />
        <Route path="/update-kyc" element={<MainLayout><UpdateKYC /></MainLayout>} />
        <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} />
        <Route path="/welcome" element={<MainLayout><Welcome /></MainLayout>} />
        <Route path="/create-app" element={<MainLayout><CreateApp /></MainLayout>} />
        <Route path="/listing" element={<MainLayout><Listing /></MainLayout>} />

        <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/paymentLink" element={<MainLayout><PaymentLink /></MainLayout>} />
        <Route path="/transactions" element={<MainLayout><Transactions /></MainLayout>} />
        <Route path="/methods" element={<MainLayout><Methods /></MainLayout>} />
        <Route path="/connect-method" element={<MainLayout><ConnectMethod /></MainLayout>} />
        <Route path="/payout-transactions" element={<MainLayout><PayoutTransactions /></MainLayout>} />
        <Route path="/payout-methods" element={<MainLayout><PayoutMethods /></MainLayout>} />
        <Route path="/payout-connect-method" element={<MainLayout><PayoutConnectMethod /></MainLayout>} />
      </Routes>
  );
}

export default App;
