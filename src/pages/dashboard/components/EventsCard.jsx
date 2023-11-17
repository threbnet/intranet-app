import profile from '../../../assets/benside.jpg'

const EventsCard = () => {

    const events = [1,2,3]
    return(
        <div className="rounded-lg border-2 p-3 mt-3">
            <div className='w-full'>
            <h2 className='font-bold text-xl mb-4 inline'>Events</h2>
            <div className='float-right'>
                <select className='rounded-lg text-gray-900 py-2 px-3'>
                    <option>Filter By Status</option>
                    <option >Ongoing</option>
                    <option>Upcomming</option>
                    <option>Done</option>
                </select>
            </div>
            </div>
            
            {events.map((event)=>(
                <div className='mt-4 pb-3 hover:rounded-lg hover:bg-white hover:text-gray-900'>
                <h2 className='flex gap-5 mb-8'>November 2023 <hr className='w-4/5 mt-3' /></h2>
                <div className='flex gap-3 '>
                    <div className='w-1/12 text-center'>
                        <h2 className='text-sm text-gray-400'>Thur</h2>
                        <h1 className='font-bold text-2xl'>11</h1>
                    </div>
                    <div className=''>
                        <h3>November 11 @ 10:30am - 3:30pm</h3>
                        <h2 className='text-xl font-bold'>Development updates</h2>
                        <h3>Venue: <span className='font-bold text-sm '>Online</span> | Status: <span className='font-bold text-sm bg-green-500 p-1 rounded-lg animate-pulse'>Ongoing</span></h3>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default EventsCard;