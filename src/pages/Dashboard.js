import {useEffect} from 'react';
const Dashboard = () => {
    
useEffect(() => {
  document.body.style.background = "#fff";
},[]);

    return (
    <>
        <div className="pc-container">
            <div className="pc-content">
                {/* [ breadcrumb ] start */}
                <div className="page-header">
                    <div className="page-block">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className="page-header-title">
                                    <h2 className="mb-0">🌞 Hello, Adeela Totah </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* [ breadcrumb ] end */}
                {/* [ Main Content ] start */}
                <div className="row">
                    <div className="dash_head1">
                        <div className="container">
                            {/* Step Tracker */}
                            <div className="steps-box">
                                <h2>Follow these steps to start</h2>
                                <div className="steps">
                                    {/* Step 1 */}
                                    <div className="step">
                                        <div className="circle complete">✔</div>
                                        <span className="step-label">Add payment Gateway</span>
                                    </div>
                                    {/* Step 2 */}
                                    <div className="step">
                                        <div className="circle complete">✔</div>
                                        <span className="step-label">Add payment Method</span>
                                    </div>
                                    {/* Step 3 */}
                                    <div className="step">
                                        <div className="circle pending">3</div>
                                        <span className="step-label">Make your first transaction</span>
                                    </div>
                                </div>
                            </div>
                            {/* Action Cards */}
                            <div className="cards">
                                {/* Card 1 */}
                                <div className="card">
                                    <h3>Add payment Gateway</h3>
                                    <p>Start by adding a payment gateway</p>
                                    <button>
                                        <span>Add payment Gateway</span>
                                        <span>→</span>
                                    </button>
                                </div>
                                {/* Card 2 */}
                                <div className="card">
                                    <h3>Add payment Method</h3>
                                    <p>Next add a payment method</p>
                                    <button>
                                        <span>Add payment Method</span>
                                        <span>→</span>
                                    </button>
                                </div>
                                {/* Card 3 */}
                                <div className="card">
                                    <h3>Make your first transaction</h3>
                                    <p>You will be redirected to YouTube  to learn about what you have to do</p>
                                    <button>
                                        <span>Make your first transaction</span>
                                        <span>→</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* [ Row 1 ] start */}


                    {/* [ Row 1 ] end */}
                    {/* [ Row 2 ] start */}
                    {/* DOM/Jquery table start */}

                    {/* Row Created Callback table end */}
                </div>
                {/* [ Row 2 ] end */}
            </div>
            {/* [ Main Content ] end */}
        </div>
    </>
    );

}
export default Dashboard;
