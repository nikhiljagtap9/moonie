import React from "react";

const PersonalKYC = () => {
    return (
        <form>
            <div className="col-md-3" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Upload Selfie </label>
                <input type="file" className="form-control" placeholder="Enter first name" />
            </div>
            <div className="col-md-3" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >IT Type</label>
                <select className="form-control" >
                    <option>Select IT Type</option>
                    <option>ID Card</option>
                    <option>Passport</option>
                    <option>Driver Licence</option>
                </select>
            </div>
            <div className="col-md-3" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Upload ID Front Side </label>
                <input type="file" className="form-control" placeholder="" />
            </div>
            <div className="col-md-3" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Upload ID Back Side </label>
                <input type="file" className="form-control" placeholder="" />
            </div>
            <div className="col-md-3" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Proof of Address</label>
                <select className="form-control" >
                    <option>Select Proof of Address</option>
                    <option>Company Utility Bill</option>
                    <option>Utility Bill</option>
                    <option>Bank Statement</option>
                </select>
            </div>
            <div className="col-md-3" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Upload Front Side </label>
                <input type="file" className="form-control" placeholder="" />
            </div>
            <div className="col-md-3" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Upload Back Side </label>
                <input type="file" className="form-control" placeholder="" />
            </div>
            <div className="clear"></div>
            <button type="submit" className="btn btn-primary mb-4 submi_movi"  >Update</button>
        </form>
    );
};

export default PersonalKYC;
