import React from "react";

const BasicProfile = () => {
    return (
        <form>
            <div className="col-md-4" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >First Name</label>
                <input type="text" className="form-control" placeholder="Enter first name" />
            </div>
            <div className="col-md-4" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Last Name</label>
                <input type="text" className="form-control" placeholder="Enter Last Name " />
            </div>
            <div className="col-md-4" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Phone</label>
                <input type="text" className="form-control" placeholder="Enter Phone " />
            </div>
            <div className="col-md-4" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Date Of Birth</label>
                <input type="date" className="form-control" placeholder="Enter Date Of Birth " />
            </div>
            <div className="col-md-4" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Country</label>
                <select className="form-control" >
                    <option>Select Country</option>
                    <option>Country 1</option>
                    <option>Country 2</option>
                    <option>Country 3</option>
                </select>
            </div>
            <div className="col-md-4" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >State</label>
                <select className="form-control" >
                    <option>Select State</option>
                    <option>State 1</option>
                    <option>State 2</option>
                    <option>State 3</option>
                </select>
            </div>
            <div className="col-md-4" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >City</label>
                <select className="form-control" >
                    <option>Select City</option>
                    <option>City 1</option>
                    <option>City 2</option>
                    <option>City 3</option>
                </select>
            </div>
            <div className="col-md-4" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Address</label>
                <input type="text" className="form-control" placeholder="Enter Address " />
            </div>
            <div className="clear"></div>
            <button type="submit" className="btn btn-primary mb-4 submi_movi"  >Update</button>
        </form>
    );
};

export default BasicProfile;
