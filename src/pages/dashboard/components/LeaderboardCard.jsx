import profile from "../../../assets/benside.jpg";

const LeaderboardCard = () => {
  const rankers = [
    {
      id: 1,
      name: "JohnDoe123",
      rank: "Specialist",
      points: "113k",
      status: "up",
    },
    {
      id: 2,
      name: "CodingMaster456",
      rank: "Recruit",
      points: "157k",
      status: "down",
    },
    {
      id: 3,
      name: "TechExplorer789",
      rank: "Novice",
      points: "125k",
      status: "up",
    },
    { id: 4, name: "DevGuru", rank: "Titan", points: "8k", status: "down" },
    {
      id: 5,
      name: "DesignNinja",
      rank: "Specialist",
      points: "81k",
      status: "up",
    },
    {
      id: 6,
      name: "CodeNomad101",
      rank: "Explorer",
      points: "47k",
      status: "down",
    },
    {
      id: 7,
      name: "NewbieCoder",
      rank: "Novice",
      points: "153k",
      status: "up",
    },
    {
      id: 8,
      name: "DigitalPhoenix",
      rank: "Titan",
      points: "183k",
      status: "down",
    },
    {
      id: 9,
      name: "TechEnthusiast",
      rank: "Specialist",
      points: "76k",
      status: "up",
    },
    {
      id: 10,
      name: "CodeWizard",
      rank: "Specialist",
      points: "195k",
      status: "up",
    },
    {
      id: 11,
      name: "WebDevPro",
      rank: "Titan",
      points: "142k",
      status: "down",
    },
    {
      id: 12,
      name: "DesignMaestro",
      rank: "Shepherd",
      points: "34k",
      status: "up",
    },
    {
      id: 13,
      name: "CodingPhoenix",
      rank: "Novice",
      points: "111k",
      status: "up",
    },
    {
      id: 14,
      name: "TechVoyager",
      rank: "Recruit",
      points: "99k",
      status: "down",
    },
    {
      id: 15,
      name: "CodeJuggler",
      rank: "Explorer",
      points: "66k",
      status: "up",
    },
    {
      id: 16,
      name: "DigitalNomad",
      rank: "Titan",
      points: "150k",
      status: "down",
    },
    {
      id: 17,
      name: "DesignProdigy",
      rank: "Specialist",
      points: "88k",
      status: "up",
    },
    {
      id: 18,
      name: "CodeSorcerer",
      rank: "Specialist",
      points: "124k",
      status: "up",
    },
    {
      id: 19,
      name: "TechInnovator",
      rank: "Titan",
      points: "178k",
      status: "down",
    },
    {
      id: 20,
      name: "WebWizard",
      rank: "Specialist",
      points: "103k",
      status: "up",
    },
    {
      id: 21,
      name: "DesignVirtuoso",
      rank: "Explorer",
      points: "55k",
      status: "down",
    },
    {
      id: 22,
      name: "CodeSavant",
      rank: "Recruit",
      points: "69k",
      status: "up",
    },
    {
      id: 23,
      name: "TechSculptor",
      rank: "Shepherd",
      points: "29k",
      status: "up",
    },
    {
      id: 24,
      name: "CodeVortex",
      rank: "Specialist",
      points: "97k",
      status: "down",
    },
    {
      id: 25,
      name: "DesignProphet",
      rank: "Titan",
      points: "137k",
      status: "up",
    },
    {
      id: 26,
      name: "WebSorceress",
      rank: "Specialist",
      points: "118k",
      status: "up",
    },
    {
      id: 27,
      name: "DigitalAlchemist",
      rank: "Titan",
      points: "162k",
      status: "down",
    },
    {
      id: 28,
      name: "CodePioneer",
      rank: "Recruit",
      points: "75k",
      status: "up",
    },
    {
      id: 29,
      name: "TechJourneyman",
      rank: "Explorer",
      points: "44k",
      status: "down",
    },
    {
      id: 30,
      name: "DesignAllegro",
      rank: "Shepherd",
      points: "38k",
      status: "up",
    },
    {
      id: 31,
      name: "CodeMaverick",
      rank: "Specialist",
      points: "135k",
      status: "up",
    },
    {
      id: 32,
      name: "WebProdigy",
      rank: "Titan",
      points: "152k",
      status: "down",
    },
    {
      id: 33,
      name: "TechSculptor",
      rank: "Specialist",
      points: "102k",
      status: "up",
    },
    {
      id: 34,
      name: "DesignVirtuoso",
      rank: "Explorer",
      points: "61k",
      status: "down",
    },
    {
      id: 35,
      name: "CodeSavant",
      rank: "Recruit",
      points: "71k",
      status: "up",
    },
    {
      id: 36,
      name: "TechSculptor",
      rank: "Shepherd",
      points: "27k",
      status: "up",
    },
    {
      id: 37,
      name: "CodeVortex",
      rank: "Specialist",
      points: "94k",
      status: "down",
    },
    {
      id: 38,
      name: "DesignProphet",
      rank: "Titan",
      points: "133k",
      status: "up",
    },
    {
      id: 39,
      name: "WebSorceress",
      rank: "Specialist",
      points: "114k",
      status: "up",
    },
    {
      id: 40,
      name: "DigitalAlchemist",
      rank: "Titan",
      points: "168k",
      status: "down",
    },
    {
      id: 41,
      name: "CodePioneer",
      rank: "Recruit",
      points: "79k",
      status: "up",
    },
    {
      id: 42,
      name: "TechJourneyman",
      rank: "Explorer",
      points: "41k",
      status: "down",
    },
    {
      id: 43,
      name: "DesignAllegro",
      rank: "Shepherd",
      points: "33k",
      status: "up",
    },
    {
      id: 44,
      name: "CodeMaverick",
      rank: "Specialist",
      points: "130k",
      status: "up",
    },
    {
      id: 45,
      name: "WebProdigy",
      rank: "Titan",
      points: "147k",
      status: "down",
    },
    {
      id: 46,
      name: "TechSculptor",
      rank: "Specialist",
      points: "99k",
      status: "up",
    },
    {
      id: 47,
      name: "DesignVirtuoso",
      rank: "Explorer",
      points: "57k",
      status: "down",
    },
    {
      id: 48,
      name: "CodeSavant",
      rank: "Recruit",
      points: "65k",
      status: "up",
    },
    {
      id: 49,
      name: "TechSculptor",
      rank: "Shepherd",
      points: "25k",
      status: "up",
    },
    {
      id: 50,
      name: "CodeVortex",
      rank: "Specialist",
      points: "90k",
      status: "down",
    },
  ];

  return (
    <div className="rounded-lg border-2 p-3">
      <div className="w-full">
        <h2 className="font-bold text-xl mb-4 inline">Leaderboard</h2>
        <div className="float-right">
          <select className="text-gray-900 rounded-lg px-3 py-2">
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
      <div className="mt-4 mb-4 border-b py-4">
        <span className="p-3 rounded-lg text-white hover:bg-white hover:text-gray-900">
          Points
        </span>
        <span className="p-3 rounded-lg text-white  hover:bg-white hover:text-gray-900">
          Levels
        </span>
        <span className="p-3 rounded-lg text-white  hover:bg-white hover:text-gray-900">
          Badges
        </span>
        <span className="p-3 rounded-lg text-white  hover:bg-white hover:text-gray-900">
          Certificates
        </span>
      </div>
      <div className="relative overflow-y-scroll h-[400px]">
        <table className=" w-full ">
          <th>#</th>
          <th>User</th>
          <th>Rank</th>
          <th>Score</th>
          <th>Status</th>
          <tbody className="w-full ">
            {rankers.map((ranker, index) => (
              <tr
                className={`${
                  index + 1 === 10 ? "w-full p-3 bg-red-400" : ""
                } hover:bg-white hover:text-gray-900 border-t text-center`}
              >
                <td className="py-2 text-center">{index + 1}</td>
                <td className="py-2 flex gap-3 group relative">
                  <img
                    src={profile}
                    className="rounded-lg w-8 h-8 border-2 inline  object-fill object-center "
                  />
                  <div className="inline">
                    <span className="text-left">@{ranker.name}</span>
                  </div>
                  <div className="hidden text-left text-white group-hover:block rounded-lg z-30 bg-black opacity-100 border-2 p-4 absolute">
                    <div className="flex gap-4">
                      <img
                        src={profile}
                        className="rounded-lg w-8 h-8 border-2 object-fill object-center "
                      />
                      <h2 className="whitespace-nowrap text-sm font-bold">
                        {ranker.name}
                      </h2>
                    </div>
                    <p className="mt-2 text-xs">
                      short bio ..truncated will be displayed here
                    </p>
                  </div>
                </td>
                <td className="py-2 text-center">{ranker.rank}</td>
                <td className="py-2 text-center">{ranker.points}</td>
                <td className="py-2 text-center">{ranker.status}</td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </div>

      <div className="gap-3 hidden">
        <div>
          <img src={profile} className="rounded-full w-32 h-32 border-2" />
        </div>
      </div>
    </div>
  );
};

export default LeaderboardCard;
