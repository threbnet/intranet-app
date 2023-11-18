import profile from '../../../assets/benside.jpg'

const LeaderboardCard = () => {
    const rankers = [
        {id:1,name:"Agbo Yaw ManFuji",rank:"Titan",points:'200k',status:'up'},
        {id:1,name:"Eugene Serwoe",rank:"Shepherd",points:'200k',status:'up'},
        {id:1,name:"Richmond Essel",rank:"Shepherd",points:'200k',status:'up'},
        {id:1,name:"Louis Ayivi",rank:"Shepherd",points:'200k',status:'up'},
        {id:1,name:"Raphael Ashia",rank:"Shepherd",points:'200k',status:'up'},
        {id:1,name:"Robert Morrison",rank:"Specialist",points:'200k',status:'up'},
        {id:1,name:"Elorm Titiati",rank:"Explorer",points:'200k',status:'down'},
        {id:1,name:"Ahorlu Noble",rank:"Novice",points:'200k',status:'up'},
        {id:1,name:"Eric Nubour",rank:"Recruit ",points:'200k',status:'up'},
        
    ]
    return(
        <div className="rounded-lg border-2 p-3">
            <div className='w-full'>
            <h2 className='font-bold text-xl mb-4 inline'>Leaderboard</h2>
            <div className='float-right'>
                <select className='text-gray-900 rounded-lg px-3 py-2'>
                    <option>Filter By Rank</option>
                    <option>Recruit</option>
                    <option>Associate</option>
                    <option>Novice</option>
                    <option>Explorer</option>
                    <option>Specialist</option>
                    <option>Shepherd</option>
                    <option>Titan</option>
                    
                </select>
            </div>
            </div>
            <table className='w-full overflow-x-scroll'>
                <th>#</th>
                <th>User</th>
                <th>Rank</th>
                <th>Points</th>
                <th>Status</th>
                <tbody className='w-full text-center'>
                    {rankers.map((ranker,index)=>(
                        <tr className=' hover:bg-white hover:text-gray-900 border-t'>
                        <td className='py-2'>{index+1}</td>
                        <td className='py-2 group relative'>
                           
                            <span className='text-left'>@{ranker.name}</span>
                            <div className='hidden text-left text-white group-hover:block rounded-lg z-30 bg-black opacity-100 border-2 p-4 absolute'>
                            <div className='flex gap-4'>
                            <img src={profile} className="rounded-full w-8 h-8 border-2 object-fill object-center " />
                            <h2 className='whitespace-nowrap text-sm font-bold'>{ranker.name}</h2>
                            </div>
                            <p className='mt-2 text-xs'>
                                short bio ..truncated will be displayed here
                            </p>
                        </div>
                        </td>
                        <td className='py-2'>
                            {ranker.rank}
                        </td>
                        <td className='py-2'>
                            {ranker.points}
                        </td>
                        <td className='py-2'>
                            {ranker.status}
                        </td>
                     </tr>
                    ))}
                </tbody>
            </table>

            <div className='gap-3 hidden'>
                <div>
                    <img src={profile} className="rounded-full w-32 h-32 border-2" />
                </div>
              
            </div>
   
        </div>
    )
}

export default LeaderboardCard;