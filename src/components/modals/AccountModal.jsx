import { useState } from "react";
import NotificationsModal from "./NotificationsModal";
import { Link } from "react-router-dom";


const AccountModal = ({image, handleAccountModal}) => {
    const [showNotificationModal,setShowNotificationModal] = useState(false);
    const [accountModalActive, setAccountModalActive] = useState(true)

    const handleNotificationModal = () =>{
        setShowNotificationModal(!showNotificationModal);
        setAccountModalActive(!accountModalActive);
    }
    return(
   <>
        { showNotificationModal && (
            <NotificationsModal handleNotificationModal={handleNotificationModal}/>
        )}

        {
            accountModalActive && (
                <div className='absolute my-2 bg-black text-white -mx-64 rounded-xl p-2 w-64 border-2'>
        <div className='w-full py-2 px-4 flex gap-3 '>
            <img src={image} className="rounded-full w-10 h-10" />
            <div className=''>
                <h2>Bernard Tay<span className='rounded-lg bg-gray-900 p-2 text-xs'>Admin</span></h2>
                <h3 className="text-xs mt-3">Rank :<span className='rounded-lg bg-gray-900 p-2 font-bold underline text-xs'>Prometheus</span></h3>
            </div>

        </div>
        <div onClick={handleNotificationModal}  className='w-full hover:bg-white hover:text-gray-800 px-4 py-2 '>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline mr-2">
                <path fillRule="evenodd" d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z" clipRule="evenodd" />
            </svg>

            <h2 className='w-1/2 inline'>Notifications <span className="bg-red-500 animate-pulse text-white rounded-lg py-1 text-xs px-2">new</span></h2>
            <button type="button" className='float-right'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 mt-1 font-bold h-4">
                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                </svg>

            </button>
        </div>
        <div className='hover:bg-white hover:text-gray-800 px-4 w-full flex gap-3 py-2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
</svg>

            <Link to={'/profile/info'}><h2 className='w-1/2 inline'>Profile</h2></Link>

        </div>
        <div className='hover:bg-white hover:text-gray-800 px-4 w-full flex gap-3 py-2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
  <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
  <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clipRule="evenodd" />
</svg>

            <h2 className='w-1/2 inline'>Stats</h2>

        </div>
        <div className='hover:bg-white hover:text-gray-800 px-4 w-full flex gap-3 py-2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
</svg>

            <h2 className='w-1/2 inline'>Settings</h2>

        </div>
        <div className='hover:bg-white hover:text-gray-800 px-4 w-full flex gap-3 py-2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z" clipRule="evenodd" />
</svg>

            <h2 className='w-1/2 inline'>Logout</h2>

        </div>

    </div>
            )
        }
   </>
    )
}

export default AccountModal;