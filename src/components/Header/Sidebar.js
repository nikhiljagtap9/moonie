import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Sidebar = () => {
   // get current path
   const location = useLocation();
   const currentPath = location.pathname;

   const [openMenus, setOpenMenus] = useState({});

   useEffect(() => {
      if (window.feather) {
         window.feather.replace(); // feather icon refresh
      }
   }, [openMenus]); // re-run on menu toggle

   const toggleMenu = (menuId) => {
      setOpenMenus((prev) => ({
         ...prev,
         [menuId]: !prev[menuId], // toggle specific menu
      }));
   };

   return (
      <>
         {/* Sidebar start */}
         <nav className="pc-sidebar">
            <div className="navbar-wrapper">
               <div className="m-header">
                  <a href="/" className="b-brand text-primary">
                     <img src="/assets/images/Logo.png" alt="logo image" className="main_logo" />
                  </a>
               </div>
               <div className="navbar-content">
                  <div className="selctd_cntr">
                     {/* <img className="selc_logo" src="https://persausive.com/public/frontend/images/logo_fev.png"/> */}
                     <div className="selc_text">Persausive</div>
                     <div className="clear"></div>
                     <div className="svg_right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-caret-down">
                           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                           <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
                        </svg>
                     </div>
                     <div className="clear"></div>
                  </div>
                  <div className="clear"></div>
                  <ul className="pc-navbar">

                     <li className={`pc-item pc-hasmenu activ_dash ${currentPath === '/dashboard' ? 'active' : ''}`}>
                        <a href="dashboard" className="pc-link">
                           <span className="pc-micon">
                              <i className="ph-duotone ph-gauge"></i>
                           </span>
                           <span className="pc-mtext" >Dashboard</span>
                        </a>
                     </li>


                     {/* Payments Menu */}
                     <li className={`pc-item pc-hasmenu 
                        ${(currentPath.startsWith('/transactions') || currentPath.startsWith('/methods')) ? 'active open' : ''}
                        ${openMenus.payments ? 'open' : ''}`}>
                        <a href="#" className="pc-link" onClick={(e) => { e.preventDefault(); toggleMenu('payments'); }}>

                           <span class="pc-micon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-receipt-dollar">
                                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                 <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
                                 <path d="M14.8 8a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                                 <path d="M12 6v10" />
                              </svg>

                           </span>
                           <span className="pc-mtext">Payments</span>
                           <span className="pc-arrow"><i data-feather="chevron-right"></i></span>
                        </a>
                        <ul className="pc-submenu" style={{ display: openMenus.payments ? 'block' : 'none' }}>
                           <li className={`pc-item ${currentPath === '/transactions' ? 'active' : ''}`}>
                              <Link to="/transactions" className="pc-link">Transactions</Link>
                           </li>
                           <li className={`pc-item ${currentPath === '/methods' ? 'active' : ''}`}>
                              <Link to="/methods" className="pc-link">Methods</Link>
                           </li>
                        </ul>
                     </li>

                     {/* Payouts Menu */}
                     <li className={`pc-item pc-hasmenu 
                        ${(currentPath.startsWith('/payout-transactions') || currentPath.startsWith('/payout-methods')) ? 'active open' : ''}
                        ${openMenus.payouts ? 'open' : ''}`}>
                        <a href="#" className="pc-link" onClick={(e) => { e.preventDefault(); toggleMenu('payouts'); }}>
                           <span className="pc-micon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className="icon icon-tabler icon-tabler-credit-card">
                                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                 <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                                 <path d="M3 10l18 0" />
                                 <path d="M7 15l.01 0" />
                                 <path d="M11 15l2 0" />
                              </svg>
                           </span>
                           <span className="pc-mtext">Payouts</span>
                           <span className="pc-arrow"><i data-feather="chevron-right"></i></span>
                        </a>
                        <ul className="pc-submenu" style={{ display: openMenus.payouts ? 'block' : 'none' }}>
                           <li className={`pc-item ${currentPath === '/payout-transactions' ? 'active' : ''}`}>
                              <Link to="/payout-transactions" className="pc-link">Transactions</Link>
                           </li>
                           <li className={`pc-item ${currentPath === '/payout-methods' ? 'active' : ''}`}>
                              <Link to="/payout-methods" className="pc-link">Methods</Link>
                           </li>
                        </ul>
                     </li>




                     <li className="pc-item pc-hasmenu activ_dash">
                        <a href="paymentLink" className="pc-link">
                           <span className="pc-micon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-link">
                                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                 <path d="M9 15l6 -6" />
                                 <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                                 <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                              </svg>
                           </span>
                           <span className="pc-mtext" >Payment Link</span>
                        </a>
                     </li>
                     <li className="pc-item pc-hasmenu activ_dash">
                        <a href="#" className="pc-link">
                           <span className="pc-micon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-users">
                                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                 <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                                 <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                 <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                 <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                              </svg>
                           </span>
                           <span className="pc-mtext" >Customers</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
         {/* Sidebar end */}
      </>
   );
};

export default Sidebar;