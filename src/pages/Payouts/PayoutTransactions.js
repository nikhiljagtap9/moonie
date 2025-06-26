import React, { useEffect } from 'react';
import $ from 'jquery';
import 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';

const PayoutTransactions = () => {
    useEffect(() => {
        const table = $('#transaction').DataTable({
            paging: true,
            responsive: true
        });

        return () => {
            table.destroy();
        };
    }, []);

    return (
        <section className="pc-container">
            <div className="pc-content">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                 <h5>
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.5"  stroke-linecap="round"   stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-receipt-dollar">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
                                        <path d="M14.8 8a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                                        <path d="M12 6v10" />
                                    </svg>
                                    Transaction
                                </h5>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table id="transaction" className="table table-striped table-bordered nowrap">
                                        <thead>
                                            <tr>
                                                <th>User ID</th>
                                                <th>Transaction ID</th>
                                                <th>Date & Time</th>
                                                <th>Amount</th>
                                                <th>Currency</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[...Array(6)].map((_, i) => (
                                                <tr key={i}>
                                                    <td>Harry Hendricks</td>
                                                    <td>12KJO0066</td>
                                                    <td>28-May-2025, 7.00 PM</td>
                                                    <td>$ 123</td>
                                                    <td>USD</td>
                                                    <td><span className="badge bg-primary">Active</span></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    {/* DataTableWrapper removed, useEffect used instead */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PayoutTransactions;
