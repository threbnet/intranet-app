import QuestCard from "./components/QuestCard";

const QuestsPage = () => {
    const quests = [1,2,3,4,5,1,2,3,4,5]
  return (
    <div className="w-full">
      <h2 className="text-3xl text-white font-bold text-center">
        Trebnet Quests Board
      </h2>
      <div className="w-1/2 mt-3 mx-auto">
        <div className="w-full rounded-full border-2">
          <input
            type="search"
            className="w-4/5 p-3 text-white bg-transparent outline-none inline"
            placeholder="Search for Quest Here"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mt-3 mr-4 float-right text-white w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>

      <div className="mt-6 w-full flex justify">
        <div className="w-1/2 pt-4 inline">
            <h2 className="text-white text-lg">Available Quests</h2>
        </div>
        <div className="items-end flex gap-4">
           <div>
           <label className="text-white">Filter By: </label>
            <select className="p-2 rounded-lg">
                <option>Rank</option>
                <option>Recruit</option>
            <option>Associate</option>
            <option>Novice</option>
            <option>Explorer</option>
            <option>Specialist</option>
            <option>Shepherd</option>
            <option>Titan</option>

            </select>
           </div>
           <div>
           <label className="text-white">Sort By: </label>
            <select className="p-2 rounded-lg">
            <option>Rewards</option>
            <option>Deadline</option>
            <option>Most Recent</option>
            <option>Most Viewed</option>
            <option>Most Participants</option>
            {/* <option>Specialist</option>
            <option>Shepherd</option>
            <option>Titan</option> */}

            </select>
           </div>
        </div>
      </div>
      <div className="mt-8 flex flex-row flex-wrap gap-8">
            {quests.map((item)=>(
                <QuestCard quest={item} />
            ))}
      </div>
    </div>
  );
};

export default QuestsPage;
