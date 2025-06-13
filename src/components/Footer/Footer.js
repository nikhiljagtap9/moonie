    import React from 'react';
    import { Link } from 'react-router-dom';

    
    const Footer = () => {
       <>
         <footer className="pc-footer">
            <div className="footer-wrapper container-fluid">
                <div className="row">
                <div className="col-sm-6 my-1">
                    <p className="m-0">Made with &#9829; by Team 
                        <Link to="#" target="_blank"> Moonie</Link>
                    </p>
                </div>
                
                </div>
            </div>
        </footer>

       </>
      
    };
    
    export default Footer;