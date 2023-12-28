import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const QuestCard = ({quest}) => {
  return (
    <div className="relative rounded-lg w-[300px] border-2">
      <div className="h-32 w-full">
        <img
          src={logo}
          className="h-full w-full object-cover object-center rounded-t-lg"
        />
      </div>
      <div className="border-2 border-white  text-white relative w-full  z- bg-[#08081c] opacity-100 rounded-t-xl">
        <img
          src={logo}
          className="absolute -my-6 border-2 border-white mx-2 top-0 w-16 h-16 rounded-full object-cover object-center"
        />
        <div className="w-full">
          <div className="float-right flex gap-2 py-2 p-2">
            <span className="flex text-sm gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
              </svg>{" "}
              <span className="text-xs">22</span>
            </span>
            <span className="flex text-sm gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
                <path
                  fillRule="evenodd"
                  d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              <span className="text-xs">4</span>
            </span>
          </div>
        </div>
        <Link to={'/quests/'+quest+'/overview'}><div className="p-4 py-8">
          <h2 className="font-bold text-lg py-2">Search and Destroy Bugs</h2>
          <p className="text-sm text-gray-300">
            This quest has to do with locating bugs in a given code and getting
            the code to work...
          </p>
        </div></Link>
        <div className="p-4">
          <ul>
            <li>🏆 Rank : A </li>
            <li>🎁 Rewards : 1000.00 RCs | 2000RP</li>
            <li>👥 Participation : 3</li>
            <li>🏅 Required Rank : Novice </li>
          </ul>
        </div>
        <div className="p-4 flex gap-2">
          <span className="rounded-full text-xs px-3 py-1 border">Python</span>
          <span className="rounded-full text-xs px-3 py-1 border">IRL</span>
          <span className="rounded-full text-xs px-3 py-1 border">React</span>
        </div>
        <div className=" w-full flex gap-3 p-3">
          <button className="w-3/4 rounded-lg bg-green-500 text-white p-2">
            Request
          </button>
          <Link to={'/quests/'+quest+'/overview'}><button className=" rounded-lg bg-green-500 text-white p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
              <path
                fillRule="evenodd"
                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default QuestCard;
