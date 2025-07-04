import React, { useState } from "react";
import BasicProfile from "./BasicProfile";
import PersonalKYC from "./PersonalKYC";
import BusinessProfile from "./BusinessProfile";
import BusinessKYC from "./BusinessKYC";

const UpdateKYC = () => {
  const [activeTab, setActiveTab] = useState("basic");

  const renderTab = () => {
    switch (activeTab) {
      case "basic": return <BasicProfile />;
      case "personal": return <PersonalKYC />;
      case "business": return <BusinessProfile />;
      case "kyc": return <BusinessKYC />;
      default: return null;
    }
  };

     const tabTitles = {
        basic: "Basic Profile",
        personal: "Personal KYC",
        business: "Business Profile",
        kyc: "Business KYC"
    };


  return (
    <section className="pc-container kyc_panl">
      <div className="pc-content">
        <div className="tabs">
          <div className="tab-buttons">
            <button className={activeTab === "basic" ? "active" : ""} onClick={() => setActiveTab("basic")}>Basic Profile</button>
            <button className={activeTab === "personal" ? "active" : ""} onClick={() => setActiveTab("personal")}>Personal KYC</button>
            <button className={activeTab === "business" ? "active" : ""} onClick={() => setActiveTab("business")}>Business Profile</button>
            <button className={activeTab === "kyc" ? "active" : ""} onClick={() => setActiveTab("kyc")}>Business KYC</button>
          </div>
          <div className="clear"></div>
           <div className="tab-content active">
            <div className="row">
               <div className="col-md-12" bis_skin_checked="1">
                  <div className="card" bis_skin_checked="1">
                     <div className="card-header" bis_skin_checked="1">
                        <h5>
                           <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-text">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                              <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                              <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                              <path d="M9 12h6" />
                              <path d="M9 16h6" />
                           </svg>
                             {tabTitles[activeTab]}
                        </h5>
                     </div>
                     <div className="card-body" bis_skin_checked="1">
                        <div className="row" bis_skin_checked="1">
                           <div className="col-md-12 comn_md comn_md_4" bis_skin_checked="1">
                              {renderTab()}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateKYC;
