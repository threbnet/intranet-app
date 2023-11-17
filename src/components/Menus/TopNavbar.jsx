import logo from '../../assets/logo.png'
import profile from '../../assets/benside.jpg'
import { useState } from 'react';
import AccountModal from '../modals/AccountModal';
const TopNavbar = () => {

    const [showAccount, setShowaccount] = useState(false)

    const handleAccountModal = () => {
        setShowaccount(false);
    }
    return (
        <div className="py-2 w-full fixed z-10 border-b-2 mb-4 bg-opacity-100 bg-[#2d2b2b]">
            <div className="w-full px-3">
                <div className="float-left flex gap-3">
                    {/* logo goes here */}
                    <img src={logo} className="rounded-full w-12 h-12 object-fill object-center" />
                    <h2 className='text-white text-xl font-bold mt-2'>TREBNET</h2>
                </div>
                <div className="float-right  flex gap-3">
                    <button type="button" className="rounded-full px-2 py-2 text-white border-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </button>
                    <button type="button" onClick={()=> setShowaccount(!showAccount)} className="rounded-full hover:border-blue-700  text-white border-2">
                        <img src={profile} className="rounded-full w-10 h-10 object-fill object-center" />

                    </button>

                    {showAccount && (
                    <AccountModal image={profile} />
                )}
                </div>
              
            </div>
        </div>
    )
}

export default TopNavbar;