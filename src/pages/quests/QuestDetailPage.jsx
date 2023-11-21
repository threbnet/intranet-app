import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import banner from "../../assets/logo.png";
import { useEffect, useState } from "react";
import RibbonTab from "./components/RibbonTab";


const QuestDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <div className="w-full">
       <div>
        <Link
          p-2
          hover:bg-white
          hover:text-gray-900
          to={"/quests"}
          className="flex gap-2 p-3 hover:underline text-sm uppercase text-white"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
          Go to Quests List
        </Link>
      </div>
      

      <div className="w-full">
        <div className="w-full border-2 rounded-t-lg">
          <img
            src={banner}
            className="w-full rounded-t-lg h-64 object-cover object-center"
          />
        </div>
        <div className="relative border-t-0 border-2">
          <img
            src={banner}
            className="absolute rounded-full border-2 -my-16 mx-4 h-32 w-32 object-cover object-center"
          />
          <RibbonTab/>
         
        </div>
        <div className="w-full flex border-2 border-t-0 p-4">
          <div className="text-white  pt-12 w-3/12">
            <h2 className="text-3xl">Search and destroy bugs</h2>
            <p className="py-3">
              This quest has to do with locating bugs in a given code and
              getting the code to work...
            </p>
            <div className="mb-4">
              <button className="rounded-lg bg-blue-500 text-white p-2 w-full">
                Join this quest
              </button>
              <button className="rounded-lg bg-blue-500 text-white p-2 w-full mt-3">
                Join the Conversation{" "}
              </button>
            </div>
            <hr className="w-full" />
            <div className="my-3">
              <ul className="gap-3">
                <li className="py-1">🏆 Rank : A </li>
                <li className="py-1">🎁 Rewards : 1000.00 RCs | 2000RP</li>
                <li className="py-1">👥 Participation : 3</li>
                <li className="py-1">🏅 Required Rank : Novice </li>
              </ul>
           </div>
            <hr className="w-full" />
            <div className="my-3">
              <h3>Clients</h3>
              <div className="mt-2 flex gap-3">
                    <img src={banner} className="rounded-full w-12 h-12 border-2" />
                    <div className="pt-2">
                        <span className="text-lg">Trebnet</span>
                    </div>
              </div>
            </div>
          </div>
          <div className="text-white w-5/6 p-4 pt-12 ">
               <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestDetailPage;
