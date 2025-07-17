import React from "react";

const BusinessKYC = () => {
    return (
        <form>
            <div className="col-md-4" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >KYC Document Type</label>
                <select className="form-control" >
                    <option>Select KYC Type</option>
                    <option>Business License</option>
                    <option>Business Registration Certificate</option>
                    <option>Tax Certificate</option>
                </select>
            </div>
            <div className="col-md-4" bis_skin_checked="1">
                <label for="EveTitle" className="form-label" >Upload ID Front Side </label>
                <input type="file" className="form-control" placeholder="" />
            </div>

            <div className="clear"></div>
            <button type="submit" className="btn btn-primary mb-4 submi_movi"  >Update</button>
        </form>
    );
};

export default BusinessKYC;
