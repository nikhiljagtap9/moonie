import React, {useState,useEffect} from 'react';
import { useDispatch } from "react-redux";
import { getApplicationsAction } from "../actions/authAction";


const Listing = () => {
    const dispatch = useDispatch();
    const[userName,setUserName] = useState('');
    const [applicationList, setApplicationList] = useState([]);
    
    useEffect(() => {
        const profileString = sessionStorage.getItem('profile') || localStorage.getItem('profile');
        
        if(profileString){
            try{
            const profile = JSON.parse(profileString);
            const firstName = profile?.user?.first_name || '';
                setUserName(firstName);
            }catch(err){
            console.error("Invalid session profile data", err);
            }

        }

       
        // call get application API
        fetchApplicationList();
        
    },[]);

    const fetchApplicationList = async () => {
        let apps  = await dispatch(getApplicationsAction());
        if (apps) {
            setApplicationList(apps);
        }
    }

  
    return (
        <>
            <style>{`
   .pc-sidebar, .pc-header, .pc-container, .pc-footer{
   display: none;
   }
   `}
            </style>
            <div className="mone_wrp_text">


                <div className="hand_shak_list">
                    <span className="wave">👋</span>
                </div>
                <div className="clear"></div>
                <div className="app_titl">Hi {userName},<div className="clear"></div>
                    <div className="welcmaka"> Welcome back to Moonie</div>
                    <div className="clear"></div>
                    <div className="dashb_text">
                        Your dashboard is ready to use. <br /> Select your app to get started.
                    </div>
                </div>

                <div className="hand_wrp">

                    <div className="listing_wrp_1">
                        {applicationList.map((app) => (
                        <a key={app.id} href="dashboard" className="listing_wrp_singl">
                            <img src={app.logo || "https://persausive.com/public/frontend/images/logo_fev.png"} className="lisgn_icon" alt="App" />
                            <div className="listn_text">{app.name}</div>
                            <div className="clear"></div>
                        </a>
                        ))}
                        {/* <a href="dashboard" className="listing_wrp_singl">
                            <img src="https://persausive.com/public/frontend/images/logo_fev.png" className="lisgn_icon" />
                            <div className="listn_text">Persausive</div>
                            <div className="clear"></div>
                        </a>

                        <a href="dashboard" className="listing_wrp_singl">
                            <img src="https://persausive.com/public/frontend/images/logo_fev.png" className="lisgn_icon" />
                            <div className="listn_text">Persausive</div>
                            <div className="clear"></div>
                        </a> */}

                        <a href="create-app" className="listing_wrp_singl add_new_list">
                            <div className="lisgn_icon lisgn_icon_add">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-circle-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4.929 4.929a10 10 0 1 1 14.141 14.141a10 10 0 0 1 -14.14 -14.14zm8.071 4.071a1 1 0 1 0 -2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0 -2h-2v-2z" /></svg>
                            </div>
                            <div className="listn_text">Create New App</div>
                            <div className="clear"></div>
                        </a>
                    </div>


                </div>


                <div className="clear"></div>
            </div>

        </>
    );
};

export default Listing;