const ConnectMethod = () => {
    return (
        <>
            <section className="pc-container">
                <div className="pc-content">

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card card_serch card_serch_half">
                                <div className="drop_wrap drop_wrap_2">

                                    <div className="dropdown">
                                        <input type="text" id="dropdownInput1" placeholder="Filter By Currency" onkeyup="filterFunction('1')" onclick="toggleDropdown('1')" />
                                        <div id="dropdownList1" className="dropdown-content">
                                            <div onclick="selectItem('1', this)">AED</div>
                                            <div onclick="selectItem('1', this)">INR</div>
                                            <div onclick="selectItem('1', this)">USD</div>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                    <div className="dwon_arw">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-caret-down">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="drop_wrap drop_wrap_2">
                                    <div className="dropdown">
                                        <input type="text" id="dropdownInput2" placeholder="Filter By Country" onkeyup="filterFunction('2')" onclick="toggleDropdown('2')" />
                                        <div id="dropdownList2" className="dropdown-content">
                                            <div onclick="selectItem('2', this)">USA</div>
                                            <div onclick="selectItem('2', this)">Canada</div>
                                            <div onclick="selectItem('2', this)">Germany</div>
                                            <div onclick="selectItem('2', this)">Australia</div>
                                        </div>
                                    </div>
                                    <div className="clear"></div>
                                    <div className="dwon_arw">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-caret-down">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="serch_bar_1">
                                    <input type="text" placeholder="Search..." className="serch_bar" />
                                    <div className="clear"></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                        <path d="M21 21l-6 -6" />
                                    </svg>
                                </div>
                                <div className="clear"></div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <h5>
                                        <a href="methods" className="backmethod" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M15 6l-6 6l6 6" />
                                            </svg>
                                        </a>
                                        Available Payout Methods
                                    </h5>
                                </div>



                                <div className="card-body">
                                    <div className="con_meth_wrap">



                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                                            <div className="bg-white rounded-xl shadow-md p-6 w-80 border border-gray-200">
                                                <div className="flex items-center space-x-4 mb-4">
                                                    <div className="bg-fuchsia-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">
                                                        A
                                                    </div>
                                                    <div className="text-lg font-semibold text-gray-800">Airtel RDC</div>
                                                </div>
                                                <p className="text-gray-600 text-sm mb-2">
                                                    Mobile money service provided by Airtel phone operator in Congo.
                                                </p>
                                                <a href="#" className="text-blue-600 text-sm underline mb-4 inline-block">Learn more</a>
                                                <div className="clear"></div>
                                                <div className="mt-4 mb-4 curnc_wrp_all">
                                                    <label className="font-semibold text-sm text-gray-800 block mb-1">Currency</label>
                                                    <div className="curncy_ans">
                                                        CDF - Congolese Franc
                                                    </div>
                                                    <div className="clear"></div>
                                                </div>
                                                <button className="w-full bg-blue-100 text-blue-700 font-medium py-2 rounded-xl flex items-center justify-center space-x-2 hover:bg-blue-200 transition">
                                                    <span>Connect Airtel RDC</span>
                                                    <span className="text-xl">+</span>
                                                </button>
                                            </div>

                                            <div className="bg-white rounded-xl shadow-md p-6 w-80 border border-gray-200">
                                                <div className="flex items-center space-x-4 mb-4">
                                                    <div className="bg-fuchsia-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">
                                                        A
                                                    </div>
                                                    <div className="text-lg font-semibold text-gray-800">Airtel RDC</div>
                                                </div>
                                                <p className="text-gray-600 text-sm mb-2">
                                                    Mobile money service provided by Airtel phone operator in Congo.
                                                </p>
                                                <a href="#" className="text-blue-600 text-sm underline mb-4 inline-block">Learn more</a>
                                                <div className="clear"></div>
                                                <div className="mt-4 mb-4 curnc_wrp_all">
                                                    <label className="font-semibold text-sm text-gray-800 block mb-1">Currency</label>
                                                    <div className="curncy_ans">
                                                        CDF - Congolese Franc
                                                    </div>
                                                    <div className="clear"></div>
                                                </div>
                                                <button className="w-full bg-blue-100 text-blue-700 font-medium py-2 rounded-xl flex items-center justify-center space-x-2 hover:bg-blue-200 transition">
                                                    <span>Connect Airtel RDC</span>
                                                    <span className="text-xl">+</span>
                                                </button>
                                            </div>

                                            <div className="bg-white rounded-xl shadow-md p-6 w-80 border border-gray-200">
                                                <div className="flex items-center space-x-4 mb-4">
                                                    <div className="bg-fuchsia-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">
                                                        A
                                                    </div>
                                                    <div className="text-lg font-semibold text-gray-800">Airtel RDC</div>
                                                </div>
                                                <p className="text-gray-600 text-sm mb-2">
                                                    Mobile money service provided by Airtel phone operator in Congo.
                                                </p>
                                                <a href="#" className="text-blue-600 text-sm underline mb-4 inline-block">Learn more</a>
                                                <div className="clear"></div>
                                                <div className="mt-4 mb-4 curnc_wrp_all">
                                                    <label className="font-semibold text-sm text-gray-800 block mb-1">Currency</label>
                                                    <div className="curncy_ans">
                                                        CDF - Congolese Franc
                                                    </div>
                                                    <div className="clear"></div>
                                                </div>
                                                <button className="w-full bg-blue-100 text-blue-700 font-medium py-2 rounded-xl flex items-center justify-center space-x-2 hover:bg-blue-200 transition">
                                                    <span>Connect Airtel RDC</span>
                                                    <span className="text-xl">+</span>
                                                </button>
                                            </div>

                                            <div className="bg-white rounded-xl shadow-md p-6 w-80 border border-gray-200">
                                                <div className="flex items-center space-x-4 mb-4">
                                                    <div className="bg-fuchsia-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">
                                                        A
                                                    </div>
                                                    <div className="text-lg font-semibold text-gray-800">Airtel RDC</div>
                                                </div>
                                                <p className="text-gray-600 text-sm mb-2">
                                                    Mobile money service provided by Airtel phone operator in Congo.
                                                </p>
                                                <a href="#" className="text-blue-600 text-sm underline mb-4 inline-block">Learn more</a>
                                                <div className="clear"></div>
                                                <div className="mt-4 mb-4 curnc_wrp_all">
                                                    <label className="font-semibold text-sm text-gray-800 block mb-1">Currency</label>
                                                    <div className="curncy_ans">
                                                        CDF - Congolese Franc
                                                    </div>
                                                    <div className="clear"></div>
                                                </div>
                                                <button className="w-full bg-blue-100 text-blue-700 font-medium py-2 rounded-xl flex items-center justify-center space-x-2 hover:bg-blue-200 transition">
                                                    <span>Connect Airtel RDC</span>
                                                    <span className="text-xl">+</span>
                                                </button>
                                            </div>

                                            <div className="bg-white rounded-xl shadow-md p-6 w-80 border border-gray-200">
                                                <div className="flex items-center space-x-4 mb-4">
                                                    <div className="bg-fuchsia-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">
                                                        A
                                                    </div>
                                                    <div className="text-lg font-semibold text-gray-800">Airtel RDC</div>
                                                </div>
                                                <p className="text-gray-600 text-sm mb-2">
                                                    Mobile money service provided by Airtel phone operator in Congo.
                                                </p>
                                                <a href="#" className="text-blue-600 text-sm underline mb-4 inline-block">Learn more</a>
                                                <div className="clear"></div>
                                                <div className="mt-4 mb-4 curnc_wrp_all">
                                                    <label className="font-semibold text-sm text-gray-800 block mb-1">Currency</label>
                                                    <div className="curncy_ans">
                                                        CDF - Congolese Franc
                                                    </div>
                                                    <div className="clear"></div>
                                                </div>
                                                <button className="w-full bg-blue-100 text-blue-700 font-medium py-2 rounded-xl flex items-center justify-center space-x-2 hover:bg-blue-200 transition">
                                                    <span>Connect Airtel RDC</span>
                                                    <span className="text-xl">+</span>
                                                </button>
                                            </div>
                                            <div className="bg-white rounded-xl shadow-md p-6 w-80 border border-gray-200">
                                                <div className="flex items-center space-x-4 mb-4">
                                                    <div className="bg-fuchsia-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center text-lg">
                                                        A
                                                    </div>
                                                    <div className="text-lg font-semibold text-gray-800">Airtel RDC</div>
                                                </div>
                                                <p className="text-gray-600 text-sm mb-2">
                                                    Mobile money service provided by Airtel phone operator in Congo.
                                                </p>
                                                <a href="#" className="text-blue-600 text-sm underline mb-4 inline-block">Learn more</a>
                                                <div className="clear"></div>
                                                <div className="mt-4 mb-4 curnc_wrp_all">
                                                    <label className="font-semibold text-sm text-gray-800 block mb-1">Currency</label>
                                                    <div className="curncy_ans">
                                                        CDF - Congolese Franc
                                                    </div>
                                                    <div className="clear"></div>
                                                </div>
                                                <button className="w-full bg-blue-100 text-blue-700 font-medium py-2 rounded-xl flex items-center justify-center space-x-2 hover:bg-blue-200 transition">
                                                    <span>Connect Airtel RDC</span>
                                                    <span className="text-xl">+</span>
                                                </button>
                                            </div>






                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
export default ConnectMethod
