import React from 'react'

const Navbar = ({ pagename,pagenumber }) => {
    return (
        <>

            <div className="navbar-container border-2 border-blue-600">
                <div className="text-black font-poppins font-bold text-2xl">
                    {pagename}
                </div>

            </div>
            <div className="mt-2 pl-4 border-2 flex border-blue-600">
                <div className="w-full text-black font-poppins font-bold text-xl">
                    Sustain Ethics B2C Business
                </div>
                <div className="w-full text-end font-bold mr-4 ">
                ADM {pagenumber}
                </div>

            </div>
        </>
    )
}

export default Navbar;