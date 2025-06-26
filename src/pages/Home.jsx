import React from "react";

export default function Home() {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wraper bg-white">
        {/* Header */}
        <header className="site-header mo-left header fullwidth">
          <div className="sticky-header main-bar-wraper navbar-expand-lg">
            <div className="main-bar clearfix">
              <div className="container clearfix">
                {/* Logo - Dark */}
                <div className="logo-header mostion logo-dark">
                  <a href="/">
                    <img src="/assets/home/images/logo.png" alt="Logo" />
                  </a>
                </div>

                {/* Logo - White */}
                <div className="logo-header mostion logo-white">
                  <a href="/">
                    <img src="/assets/home/images/logo-white.png" alt="Logo White" />
                  </a>
                </div>

                {/* Navbar Toggle */}
                <button
                  className="navbar-toggler collapsed navicon justify-content-end"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>

                {/* Extra Nav */}
                <div className="extra-nav">
                  <div className="extra-cell">
                    <a href="/register" className="site-button">
                      <i className="fa fa-user"></i> Sign Up
                    </a>
                    <a
                      href="#"
                      title="Login"
                      rel="bookmark"
                      data-bs-toggle="modal"
                      data-bs-target="#car-details"
                      className="site-button"
                    >
                      <i className="fa fa-lock"></i> Login
                    </a>
                  </div>
                </div>

                {/* Main Navigation */}
                <div
                  className="header-nav navbar-collapse collapse justify-content-start"
                  id="navbarNavDropdown"
                >
                  <div className="logo-header logo-dark">
                    <a href="/">
                      <img src="/assets/home/images/logo.png" alt="Logo" />
                    </a>
                  </div>
                  <div className="logo-header logo-white">
                    <a href="/">
                      <img src="/assets/home/images/logo-white.png" alt="Logo White" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
         <div className="page-content">

            <div className="content-inner-1 main-bnr">
               <div className="bg-circle-bx"></div>
               <div className="container">
                  <div className="row">
                     <div className="col-lg-7">
                        <div className="banner-content">
                           <h1>
                           Powering Payments Across Africa
                           </h1>
                           Unified <span className="text-primary"> Payments.</span> 
                           Seamless Growth.
                           <h6>
                              Your First Step to Smarter Payments, Try MooniePay Free Today.
                           </h6>
                           <div className="find-job-bx style-1">
                              <form className="dezPlaceAni" action="category-all-jobs.html">
                                 <div className="row align-items-center find-job-bx-inner">
                                    <div className="col-sm-8 col-8  find-job-bx-inner1">
                                       <div className="row align-items-center dz-input-group">
                                          <div className="col-sm-12 col-12  dz-input-group-inner">
                                             <div className="form-group">
                                                <div className="input-group">
                                                   <div className="input-group-append">
                                                      <span className="input-group-text">
                                                      </span>
                                                   </div>
                                                   <input type="text" className="form-control" placeholder="Your Company Email ID"/>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-sm-4 col-4 find-job-bx-inner1">
                                       <button type="submit" className="site-button btn-block">try it for free</button>
                                    </div>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-5">
                        <div className="banner-media">
                           <div className="banner-main-media">
                              <img src="/assets/home/images/man.png" alt=""/>
                           </div>
                           <div className="banner-media-bg">
                              <div className="bnr-circle1">
                                 <img src="/assets/home/images/banner/microsoft.svg" className="banner-icon1" alt=""/>
                              </div>
                              <div className="bnr-circle2">
                                 <img src="/assets/home/images/banner/google.svg" className="banner-icon1" alt=""/>
                                 <img src="/assets/home/images/banner/logo.svg" className="banner-icon2" alt=""/>
                                 <img src="/assets/home/images/banner/amazon.svg" className="banner-icon3" alt=""/>
                              </div>
                              <div className="bnr-circle3"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="back-circle"></div>
               <div className="back-circle2"></div>
            </div>

            <div className="section-full content-inner-1 partners bg-white style-1">
               <div className="container">
                  <div className="our-partners item-center owl-loaded owl-theme owl-carousel owl-none mfp-gallery owl-dots-none">
                     <div className="item">
                        <a href="javascript:void(0);" className="partners-media">
                        <img src="/assets/home/images/svg/partner1.svg" alt=""/> 
                        </a>
                     </div>
                     <div className="item">
                        <a href="javascript:void(0);" className="partners-media">
                        <img src="/assets/home/images/svg/partner2.svg" alt=""/>
                        </a>
                     </div>
                     <div className="item">
                        <a href="javascript:void(0);" className="partners-media">
                        <img src="/assets/home/images/svg/partner3.svg" alt=""/>
                        </a>
                     </div>
                     <div className="item">
                        <a href="javascript:void(0);" className="partners-media">
                        <img src="/assets/home/images/svg/partner4.svg" alt=""/>
                        </a>
                     </div>
                     <div className="item">
                        <a href="javascript:void(0);" className="partners-media">
                        <img src="/assets/home/images/svg/partner5.svg" alt=""/>
                        </a>
                     </div>
                     <div className="item">
                        <a href="javascript:void(0);" className="partners-media">
                        <img src="/assets/home/images/svg/partner6.svg" alt=""/>
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            <div className="section-full about-work content-inner-1 bg-white">
               <div className="container">
                  <div className="section-head text-center style-1">
                     <h6>How It Work</h6>
                     <h2 className="section-title">
                        What MooniePay Enables
                     </h2>
                     <p>MooniePay will provide merchants with tools to
                     </p>
                  </div>
                  <div className="row sp20  about-work-inner">
                     <div className="col-lg-4 col-md-6 col-sm-6 m-b20 icon-wrapper">
                        <div className="icon-bx-wraper style-1">
                           <div className="icon-content">
                              <a href="javascript:void(0);" className="icon-box text-white m-b20">
                                 <svg  xmlns="http://www.w3.org/2000/svg"    viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-credit-card">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                                    <path d="M3 10l18 0" />
                                    <path d="M7 15l.01 0" />
                                    <path d="M11 15l2 0" />
                                 </svg>
                              </a>
                              <a href="#" className="dez-tilte">Collect payments</a>
                              <p className="dz-text">from customers using local and digital methods.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-6 m-b20 icon-wrapper">
                        <div className="icon-bx-wraper style-1">
                           <div className="icon-content">
                              <a href="javascript:void(0);" className="icon-box text-white m-b20">
                                 <svg  xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-dollar">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M13 21h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
                                    <path d="M16 3v4" />
                                    <path d="M8 3v4" />
                                    <path d="M4 11h12.5" />
                                    <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                                    <path d="M19 21v1m0 -8v1" />
                                 </svg>
                              </a>
                              <a href="#" className="dez-tilte">Payout funds</a>
                              <p className="dz-text">to customers or vendors securely and efficiently.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-6 m-b20 icon-wrapper">
                        <div className="icon-bx-wraper style-1">
                           <div className="icon-content">
                              <a href="javascript:void(0);" className="icon-box text-white m-b20">
                                 <svg  xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-user-share">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h3" />
                                    <path d="M16 22l5 -5" />
                                    <path d="M21 21.5v-4.5h-4.5" />
                                 </svg>
                              </a>
                              <a href="#" className="dez-tilte">Manage customer payouts</a>
                              <p className="dz-text">in bulk or through scheduled disbursements.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-6 m-b20 icon-wrapper">
                        <div className="icon-bx-wraper style-1">
                           <div className="icon-content">
                              <a href="javascript:void(0);" className="icon-box text-white m-b20">
                                 <svg  xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-credit-card-pay">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
                                    <path d="M3 10h18" />
                                    <path d="M16 19h6" />
                                    <path d="M19 16l3 3l-3 3" />
                                    <path d="M7.005 15h.005" />
                                    <path d="M11 15h2" />
                                 </svg>
                              </a>
                              <a href="#" className="dez-tilte">Generate dynamic payment links</a>
                              <p className="dz-text">for invoices, donations, and sales.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-6 m-b20 icon-wrapper">
                        <div className="icon-bx-wraper style-1">
                           <div className="icon-content">
                              <a href="javascript:void(0);" className="icon-box text-white m-b20">
                                 <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chart-histogram">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M3 3v18h18" />
                                    <path d="M20 18v3" />
                                    <path d="M16 16v5" />
                                    <path d="M12 13v8" />
                                    <path d="M8 16v5" />
                                    <path d="M3 11c6 0 5 -5 9 -5s3 5 9 5" />
                                 </svg>
                              </a>
                              <a href="#" className="dez-tilte">Monitor real-time statistics and reports</a>
                              <p className="dz-text">such as revenue, transaction history, and wallet balance.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-6 m-b20 icon-wrapper">
                        <div className="icon-bx-wraper style-1">
                           <div className="icon-content">
                              <a href="javascript:void(0);" className="icon-box text-white m-b20">
                                 <svg  xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-businessplan">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M16 6m-5 0a5 3 0 1 0 10 0a5 3 0 1 0 -10 0" />
                                    <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                                    <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                                    <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                                    <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                                    <path d="M5 15v1m0 -8v1" />
                                 </svg>
                              </a>
                              <a href="#" className="dez-tilte">Manage multiple business applications</a>
                              <p className="dz-text">from one account, each with its credentials and configurations.</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-sm-6 m-b20 icon-wrapper">
                        <div className="icon-bx-wraper style-1">
                           <div className="icon-content">
                              <a href="javascript:void(0);" className="icon-box text-white m-b20">
                                 <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-wallet">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                    <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                                 </svg>
                              </a>
                              <a href="#" className="dez-tilte">Operate with multiple wallets and currencies</a>
                              <p className="dz-text"> enabling cross-border and regional operations with wallet isolation per currency</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="back-circle"></div>
            </div>

            <div className="section-full bg-white content-inner-1 recent-jobs recnt_job_as">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-lg-7">
                        <div className="section-head style-1">
                           <h6>One Platform. All Payments.</h6>
                           <h5 className="section-title-2">
                              Unified Payments. Seamless Growth.
                           </h5>
                           {/* <p className="mone_text" >
                              MooniePay is a modern payment aggregator platform designed to simplify how businesses collect and manage payments across Africa, beginning with a focused launch in Cameroon 🇨🇲. It aims to unify local and regional payment methods into a single interface, offering a seamless and scalable solution for merchants of all sizes. <br><br>
                              Our goal is to build a product similar to Moneroo in functionality and user experience. The design and user interface should be inspired by Moneroo to ensure familiarity, clarity, and usability across different business types.
                           </p> */}
                           <a href="javascript:void(0);" className="site-button style-1">Join Now</a>	
                        </div>
                     </div>
                     <div className="col-lg-4">
                        <div className="dz-job-media">
                           <img src="/assets/home/images/man1.png" alt=""/>
                           <svg width="892" height="733" viewBox="0 0 892 733" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M61.3623 116.435C23.5447 121.128 -3.30874 155.589 1.38355 193.406L44.2694 539.047C47.5755 565.692 65.66 586.895 89.2844 595.456C95.1286 598.219 101.463 600.202 108.175 601.249L941.587 731.348C979.239 737.225 1014.53 711.467 1020.4 673.815L1050.07 483.78L1053.09 483.404C1090.91 478.712 1117.77 444.251 1113.07 406.433L1070.19 60.7929C1065.5 22.9753 1031.03 -3.87817 993.217 0.81412L61.3623 116.435Z" fill="#2E55FA"/>
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="section-full content-inner-2 testimonials bg-white">
               <div className="container">
                  <div className="section-head style-1 text-center">
                     <h6>Clents Testimonials</h6>
                     <h2 className="section-title-3">What A Job Holder Says About Us</h2>
                     <p className="dz-text-2">There are many variations of passages of available, but the majority have suffered
                        some form, by injected humour, or look even slightly believable.
                     </p>
                  </div>
                  <div className="review-testimonial owl-carousel owl-btn-center-lr owl-btn-3 owl-theme owl-btn-center-lr owl-btn-1 owl-dots-none">
                     <div className="item">
                        <div className="testimonial-wrapper">
                           <div className="testimonial-inner">
                              <div className="bg-img">
                                 <svg width="64" height="46" viewBox="0 0 64 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M50.6293 17.2257C50.5004 15.8322 50.599 12.0441 54.2279 6.77654C54.5024 6.37904 54.4526 5.84295 54.1117 5.50214C52.6322 4.02264 51.7162 3.08904 51.0737 2.43575C50.2289 1.57434 49.8432 1.18184 49.2787 0.670045C48.9018 0.331244 48.3315 0.325345 47.9506 0.657445C41.6254 6.16134 34.6 17.5343 35.6166 31.4679C36.2123 39.6495 42.1801 45.588 49.8061 45.588C57.6322 45.588 63.9994 39.2218 63.9994 31.3956C63.9994 23.8458 58.0737 17.6544 50.6293 17.2257ZM49.8061 43.588C43.2572 43.588 38.1293 38.4298 37.6108 31.3234C36.4672 15.6525 45.7826 5.47284 48.5971 2.77754C48.8715 3.04805 49.185 3.36634 49.6469 3.83704C50.2035 4.40345 50.9653 5.17884 52.1176 6.33514C47.7123 13.1222 48.5434 17.9581 48.9076 18.6515C49.0805 18.9806 49.435 19.2023 49.8061 19.2023C56.5297 19.2023 61.9994 24.672 61.9994 31.3956C61.9994 38.1183 56.5297 43.588 49.8061 43.588Z" fill="#2E55FA"/>
                                    <path d="M15.1137 17.2257C14.9838 15.8361 15.0795 12.0509 18.7123 6.77654C18.9858 6.37904 18.9369 5.84294 18.5961 5.50214C17.1195 4.02554 16.2045 3.09294 15.5629 2.43964C14.7153 1.57634 14.3285 1.18274 13.7641 0.670039C13.3871 0.331239 12.8168 0.326339 12.436 0.656439C6.11077 6.16034 -0.915635 17.5314 0.0989652 31.4679C0.696665 39.6485 6.66537 45.588 14.2914 45.588C22.1176 45.588 28.4848 39.2218 28.4848 31.3956C28.4848 23.8449 22.559 17.6525 15.1137 17.2257ZM14.2914 43.588C7.74357 43.588 2.61267 38.4298 2.09316 31.3224C0.952565 15.6476 10.268 5.47184 13.0824 2.77754C13.3578 3.04804 13.6723 3.36834 14.1352 3.84004C14.6908 4.40644 15.4516 5.18084 16.602 6.33514C12.1967 13.1232 13.0278 17.9581 13.392 18.6505C13.5649 18.9796 13.9203 19.2023 14.2914 19.2023C21.0151 19.2023 26.4848 24.672 26.4848 31.3956C26.4848 38.1183 21.0151 43.588 14.2914 43.588Z" fill="#2E55FA"/>
                                 </svg>
                              </div>
                              <div className="testimonial-pic style-1">
                                 <div className="testimonial-pic-circle"></div>
                                 <div className="profile-pic">
                                    <img src="/assets/home/images/testimonials/pic4.png" alt=""/>
                                 </div>
                              </div>
                              <div className="profile-info">
                                 <h5 className="profile-name">Andnew Smith</h5>
                                 <span>One Year With Us</span>
                              </div>
                              <p className="dz-text-3">It is a long established fact that a reader
                                 will be distracted by readable content
                                 of a page when looking at its layout.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="testimonial-wrapper">
                           <div className="testimonial-inner">
                              <div className="bg-img">
                                 <svg width="64" height="46" viewBox="0 0 64 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M50.6293 17.2257C50.5004 15.8322 50.599 12.0441 54.2279 6.77654C54.5024 6.37904 54.4526 5.84295 54.1117 5.50214C52.6322 4.02264 51.7162 3.08904 51.0737 2.43575C50.2289 1.57434 49.8432 1.18184 49.2787 0.670045C48.9018 0.331244 48.3315 0.325345 47.9506 0.657445C41.6254 6.16134 34.6 17.5343 35.6166 31.4679C36.2123 39.6495 42.1801 45.588 49.8061 45.588C57.6322 45.588 63.9994 39.2218 63.9994 31.3956C63.9994 23.8458 58.0737 17.6544 50.6293 17.2257ZM49.8061 43.588C43.2572 43.588 38.1293 38.4298 37.6108 31.3234C36.4672 15.6525 45.7826 5.47284 48.5971 2.77754C48.8715 3.04805 49.185 3.36634 49.6469 3.83704C50.2035 4.40345 50.9653 5.17884 52.1176 6.33514C47.7123 13.1222 48.5434 17.9581 48.9076 18.6515C49.0805 18.9806 49.435 19.2023 49.8061 19.2023C56.5297 19.2023 61.9994 24.672 61.9994 31.3956C61.9994 38.1183 56.5297 43.588 49.8061 43.588Z" fill="#2E55FA"/>
                                    <path d="M15.1137 17.2257C14.9838 15.8361 15.0795 12.0509 18.7123 6.77654C18.9858 6.37904 18.9369 5.84294 18.5961 5.50214C17.1195 4.02554 16.2045 3.09294 15.5629 2.43964C14.7153 1.57634 14.3285 1.18274 13.7641 0.670039C13.3871 0.331239 12.8168 0.326339 12.436 0.656439C6.11077 6.16034 -0.915635 17.5314 0.0989652 31.4679C0.696665 39.6485 6.66537 45.588 14.2914 45.588C22.1176 45.588 28.4848 39.2218 28.4848 31.3956C28.4848 23.8449 22.559 17.6525 15.1137 17.2257ZM14.2914 43.588C7.74357 43.588 2.61267 38.4298 2.09316 31.3224C0.952565 15.6476 10.268 5.47184 13.0824 2.77754C13.3578 3.04804 13.6723 3.36834 14.1352 3.84004C14.6908 4.40644 15.4516 5.18084 16.602 6.33514C12.1967 13.1232 13.0278 17.9581 13.392 18.6505C13.5649 18.9796 13.9203 19.2023 14.2914 19.2023C21.0151 19.2023 26.4848 24.672 26.4848 31.3956C26.4848 38.1183 21.0151 43.588 14.2914 43.588Z" fill="#2E55FA"/>
                                 </svg>
                              </div>
                              <div className="testimonial-pic style-1">
                                 <div className="testimonial-pic-circle"></div>
                                 <div className="profile-pic">
                                    <img src="/assets/home/images/testimonials/pic5.png" alt=""/>
                                 </div>
                              </div>
                              <div className="profile-info">
                                 <h5 className="profile-name">Max Makina</h5>
                                 <span>One Year With Us</span>
                              </div>
                              <p className="dz-text-3">It is a long established fact that a reader
                                 will be distracted by readable content
                                 of a page when looking at its layout.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="item">
                        <div className="testimonial-wrapper">
                           <div className="testimonial-inner">
                              <div className="bg-img">
                                 <svg width="64" height="46" viewBox="0 0 64 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M50.6293 17.2257C50.5004 15.8322 50.599 12.0441 54.2279 6.77654C54.5024 6.37904 54.4526 5.84295 54.1117 5.50214C52.6322 4.02264 51.7162 3.08904 51.0737 2.43575C50.2289 1.57434 49.8432 1.18184 49.2787 0.670045C48.9018 0.331244 48.3315 0.325345 47.9506 0.657445C41.6254 6.16134 34.6 17.5343 35.6166 31.4679C36.2123 39.6495 42.1801 45.588 49.8061 45.588C57.6322 45.588 63.9994 39.2218 63.9994 31.3956C63.9994 23.8458 58.0737 17.6544 50.6293 17.2257ZM49.8061 43.588C43.2572 43.588 38.1293 38.4298 37.6108 31.3234C36.4672 15.6525 45.7826 5.47284 48.5971 2.77754C48.8715 3.04805 49.185 3.36634 49.6469 3.83704C50.2035 4.40345 50.9653 5.17884 52.1176 6.33514C47.7123 13.1222 48.5434 17.9581 48.9076 18.6515C49.0805 18.9806 49.435 19.2023 49.8061 19.2023C56.5297 19.2023 61.9994 24.672 61.9994 31.3956C61.9994 38.1183 56.5297 43.588 49.8061 43.588Z" fill="#2E55FA"/>
                                    <path d="M15.1137 17.2257C14.9838 15.8361 15.0795 12.0509 18.7123 6.77654C18.9858 6.37904 18.9369 5.84294 18.5961 5.50214C17.1195 4.02554 16.2045 3.09294 15.5629 2.43964C14.7153 1.57634 14.3285 1.18274 13.7641 0.670039C13.3871 0.331239 12.8168 0.326339 12.436 0.656439C6.11077 6.16034 -0.915635 17.5314 0.0989652 31.4679C0.696665 39.6485 6.66537 45.588 14.2914 45.588C22.1176 45.588 28.4848 39.2218 28.4848 31.3956C28.4848 23.8449 22.559 17.6525 15.1137 17.2257ZM14.2914 43.588C7.74357 43.588 2.61267 38.4298 2.09316 31.3224C0.952565 15.6476 10.268 5.47184 13.0824 2.77754C13.3578 3.04804 13.6723 3.36834 14.1352 3.84004C14.6908 4.40644 15.4516 5.18084 16.602 6.33514C12.1967 13.1232 13.0278 17.9581 13.392 18.6505C13.5649 18.9796 13.9203 19.2023 14.2914 19.2023C21.0151 19.2023 26.4848 24.672 26.4848 31.3956C26.4848 38.1183 21.0151 43.588 14.2914 43.588Z" fill="#2E55FA"/>
                                 </svg>
                              </div>
                              <div className="testimonial-pic style-1">
                                 <div className="testimonial-pic-circle"></div>
                                 <div className="profile-pic">
                                    <img src="/assets/home/images/testimonials/pic3.jpg" alt=""/>
                                 </div>
                              </div>
                              <div className="profile-info">
                                 <h5 className="profile-name">Makima Smith</h5>
                                 <span>One Year With Us</span>
                              </div>
                              <p className="dz-text-3">It is a long established fact that a reader
                                 will be distracted by readable content
                                 of a page when looking at its layout.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

        {/* Modal Box or Call to Action */}
        <div className="section-full find-jobs">
          <div className="container">
            <div className="find-jobs-inner">
              <div className="section-head style-1">
                <h3>
                  Powering Business Payments in Africa, Starting with Cameroon.
                </h3>
              </div>
              <a href="#" className="site-button style-1">
                Start Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
