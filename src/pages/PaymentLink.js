import React from 'react';
const PaymentLink = () => {
    return (
        <>
            <section className="pc-container">


                <div className="pc-content" bis_skin_checked="1">

                    <div className="page-header" bis_skin_checked="1">
                        <div className="page-block" bis_skin_checked="1">
                            <div className="row align-items-center" bis_skin_checked="1">

                                <div className="col-md-12" bis_skin_checked="1">
                                    <div className="page-header-title" bis_skin_checked="1">
                                        <h2 className="mb-0">Payment Link</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" bis_skin_checked="1">



                        <div className="col-md-12 base_infort" bis_skin_checked="1">
                            <div className="card" bis_skin_checked="1">
                                <div className="card-header" bis_skin_checked="1">
                                    <h5>Base information</h5>
                                </div>
                                <div className="card-body" bis_skin_checked="1">
                                    <form>
                                        <div className="mb-3 row" bis_skin_checked="1">
                                            <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">Title</label>
                                            <div className="col-lg-6 col-md-12 col-sm-12" bis_skin_checked="1">
                                                <input type="text" className="form-control mob_no" />
                                            </div>
                                        </div>
                                        <div className="mb-3 row" bis_skin_checked="1">
                                            <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">Description</label>
                                            <div className="col-lg-6 col-md-12 col-sm-12" bis_skin_checked="1">
                                                <textarea className="form-control form-control_text" rows="5" ></textarea>
                                            </div>
                                        </div>
                                        <div className="mb-3 row" bis_skin_checked="1">
                                            <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">Amount</label>
                                            <div className="col-lg-6 col-md-12 col-sm-12" bis_skin_checked="1">
                                                <input type="text" className="form-control " />
                                            </div>
                                        </div>
                                        <div className="row mb-0" bis_skin_checked="1">
                                            <label className="col-form-label col-lg-3 col-sm-12 text-lg-end"></label>
                                            <div className="col-lg-6 col-md-12 col-sm-12" bis_skin_checked="1">
                                                <a href="#" class="cret_link_btn" >Create Link</a>
                                                {/* <button type="submit" className="cret_link_btn">Create Link</button> */}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


            </section>
        </>
    );
};

export default PaymentLink;