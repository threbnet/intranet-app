

const NotificationsModal = ({handleNotificationModal}) => {
    return(
        <div className="absolute my-2 bg-black text-white -mx-64 rounded-xl p-2 border-2 w-64 h-64">
            <div className="w-full p-2 flex">
                <button className="" type="button" onClick={()=>handleNotificationModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 font-bold h-6">
  <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
</svg>

                </button>
                <h2 className="underline text-center w-full text-white font-bold">
                    Notifications
                </h2>
            </div>
        </div>
    )
}

export default NotificationsModal;