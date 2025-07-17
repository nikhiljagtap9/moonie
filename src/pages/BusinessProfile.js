import React from "react";

const BusinessProfile = () => {
    return (
        <form>
            <div className="col-md-3" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Name </label>
                <input type="text" className="form-control" placeholder="Enter first name" />
            </div>
            <div className="col-md-3" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Legal Name</label>
                <input type="text" className="form-control" placeholder="Enter Legal Name" />
            </div>



            <div className="col-md-3" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Category ID </label>
                <input type="text" className="form-control" placeholder="Enter Category ID" />
            </div>
            <div className="col-md-3" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Registration Number </label>
                <input type="text" className="form-control" placeholder="Enter Registration Number" />
            </div>

            <div className="col-md-3" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Tax Identification Number </label>
                <input type="text" className="form-control" placeholder="Enter Tax identification Number" />
            </div>
            <div className="col-md-3" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Registration Date</label>
                <input type="date" className="form-control" placeholder="" />
            </div>
            <div className="col-md-3" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Phone Number </label>
                <input type="text" className="form-control" placeholder="Enter Phone Number" />
            </div>
            <div className="col-md-3" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Email ID</label>
                <input type="text" className="form-control" placeholder="Enter Email ID" />
            </div>



            <div className="col-md-3" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Website URL</label>
                <input type="text" className="form-control" placeholder="Enter Website URL" />
            </div>

            <div className="col-md-3" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Country</label>
                <select className="form-control" >
                    <option>Select Country</option>
                    <option>Country 1</option>
                    <option>Country 2</option>
                    <option>Country 3</option>
                </select>
            </div>
            <div className="col-md-3" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >State</label>
                <select className="form-control" >
                    <option>Select State</option>
                    <option>State 1</option>
                    <option>State 2</option>
                    <option>State 3</option>
                </select>
            </div>
            <div className="col-md-3" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >City</label>
                <select className="form-control" >
                    <option>Select City</option>
                    <option>City 1</option>
                    <option>City 2</option>
                    <option>City 3</option>
                </select>
            </div>

            <div className="col-md-12" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Address   </label>
                <input className="form-control" type="text" placeholder="Enter Address " />
            </div>

            <div className="col-md-12" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Business Description   </label>
                <textarea className="form-control"  ></textarea>
            </div>
            <div className="clear"></div>
            <button type="submit" className="btn btn-primary mb-4 submi_movi"  >Update</button>
        </form>
    );
};

export default BusinessProfile;
