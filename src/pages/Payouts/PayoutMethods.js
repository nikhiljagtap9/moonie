const PayoutMethods = () => {
    return(
       <>
          <section className="pc-container">
   <div className="pc-content">
      <div className="row">
         <div className="col-sm-12">
            <div className="card card_serch">
               <div className="serch_bar_1">
                  <input type="text" placeholder="Search..." className="serch_bar" />
                  <div className="clear"></div>
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                     <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                     <path d="M21 21l-6 -6" />
                  </svg>
               </div>
               <div className="drop_wrap">
                  <div className="dropdown">
                     <div className="dropdown-button" onclick="toggleDropdown('1')">
                        <div className="status-dot dot-all" id="dot-1"></div>
                        <span id="label-1">All</span>
                     </div>
                     <div id="menu-1" className="dropdown-content">
                        <div onclick="selectOption('1', 'All', 'dot-all')">
                           <div className="status-dot dot-all"></div>
                           All
                        </div>
                        <div onclick="selectOption('1', 'Active', 'dot-active')">
                           <div className="status-dot dot-active"></div>
                           Active
                        </div>
                        <div onclick="selectOption('1', 'Inactive', 'dot-inactive')">
                           <div className="status-dot dot-inactive"></div>
                           Inactive
                        </div>
                     </div>
                  </div>
                  <div className="clear"></div>
                  <div className="dwon_arw">
                     <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-caret-down">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
                     </svg>
                  </div>
               </div>
               <div className="drop_wrap">

                  <div className="dropdown">
                     <div className="dropdown-button" onclick="toggleDropdown('2')">
                        <span id="label-2">Filter by Gateway</span>
                     </div>
                     <div id="menu-2" className="dropdown-content drop_with_img">
                        <div onclick="selectOption('2', 'All', 'dot-all')">
                           All
                        </div>
                        <div onclick="selectOption('2', 'Test Payout', 'dot-active')">
                           <div className="status-dot">
                              <img src="https://persausive.com/public/frontend/images/logo_fev.png"/>
                           </div>
                           Test Payout
                        </div>
                        <div onclick="selectOption('2', 'Test Payout', 'dot-active')">
                           <div className="status-dot">
                              <img src="https://persausive.com/public/frontend/images/logo_fev.png"/>
                           </div>
                           Test Payout
                        </div>
                     </div>
                  </div>
                  <div className="clear"></div>
                  <div className="dwon_arw">
                     <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-caret-down">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
                     </svg>
                  </div>
               </div>
               <div className="drop_wrap">
                  <div className="dropdown">
                     <div className="dropdown-button" onclick="toggleDropdown('3')">
                        <span id="label-3">Filter by Country</span>
                     </div>
                     <div id="menu-3" className="dropdown-content drop_with_img">
                        <div onclick="selectOption('3', 'Active', 'dot-active')">
                           <div className="status-dot dot-active">
                              <img src="https://cdn.axazara.com/flags/svg/US.svg"/>
                           </div>
                           United State
                        </div>
                     </div>
                  </div>
                  <div className="clear"></div>
                  <div className="dwon_arw">
                     <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-caret-down">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
                     </svg>
                  </div>
               </div>
               <a href="payout-connect-method" className="conct_methd">
                  Connect a Method
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
               </a>
               <div className="clear"></div>
            </div>
            <div className="card">
               <div className="card-header">
                  <h5>
                     <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"   stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-receipt-dollar">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
                        <path d="M14.8 8a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                        <path d="M12 6v10" />
                     </svg>
                     Payment methods
                  </h5>
               </div>
               <div className="card-body">
                  <div className="table-responsive">
                     <table id="row-callback" className="table table-striped table-bordered nowrap">
                        <thead>
                           <tr>
                              <th>Name</th>
                              <th>Payout Gateway</th>
                              <th>Status</th>
                              <th>Edit</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 <div className="flexx">
                                    <img className="previewImage" src="assets/images/fev.png" 
                                       alt="Event Logo" />
                                    Test Payout Method
                                 </div>
                              </td>
                              <td>
                                 <div className="flexx">
                                    <img className="previewImage" src="assets/images/fev.png" 
                                       alt="Event Logo" />
                                    Test Payout Gateway (Sandbox)
                                 </div>
                              </td>
                              <td>
                                 <span className="badge bg-primary">Active</span>
                              </td>
                              <td>
                                 <a className="readmore_btn" href="#">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-edit">
                                       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                       <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                                       <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                                       <path d="M16 5l3 3" />
                                    </svg>
                                 </a>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <div className="flexx">
                                    <img className="previewImage" src="assets/images/fev.png" 
                                       alt="Event Logo" />
                                    Test Payout Method
                                 </div>
                              </td>
                              <td>
                                 <div className="flexx">
                                    <img className="previewImage" src="assets/images/fev.png" 
                                       alt="Event Logo" />
                                    Test Payout Gateway (Sandbox)
                                 </div>
                              </td>
                              <td>
                                 <span className="badge bg-primary">Active</span>
                              </td>
                              <td>
                                 <a className="readmore_btn" href="#">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-edit">
                                       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                       <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                                       <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                                       <path d="M16 5l3 3" />
                                    </svg>
                                 </a>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <div className="flexx">
                                    <img className="previewImage" src="assets/images/fev.png" 
                                       alt="Event Logo" />
                                    Test Payout Method
                                 </div>
                              </td>
                              <td>
                                 <div className="flexx">
                                    <img className="previewImage" src="assets/images/fev.png" 
                                       alt="Event Logo" />
                                    Test Payout Gateway (Sandbox)
                                 </div>
                              </td>
                              <td>
                                 <span className="badge bg-primary">Active</span>
                              </td>
                              <td>
                                 <a className="readmore_btn" href="#">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-edit">
                                       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                       <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                                       <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                                       <path d="M16 5l3 3" />
                                    </svg>
                                 </a>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>

   </div>
</section>
       </>
    );
}


export default PayoutMethods