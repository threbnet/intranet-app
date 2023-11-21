import { Outlet } from "react-router-dom";
import profile from "../../assets/benside.jpg";
import InfoForm from "./components/InfoForm";

const ProfilePage = () => {
  return (
    <div className="text-white">
      <div className="w-full">
        <h2 className="font-bold text-xl mb-4 inline">Profile</h2>
        <div className="float-right">
          <ul className="flex rounded-lg border">
            <li className="p-3 rounded-l-lg hover:bg-white hover:text-gray-900 bg-gray-100 text-gray-900">
              Profile
            </li>
            <li className="p-3 hover:bg-white hover:text-gray-900 border-r">
              Progress
            </li>
            <li className="p-3 hover:bg-white hover:text-gray-900">
              Inforgraphics
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 h-full border-2 w-full grid grid-cols-1 lg:grid-cols-8 lg:gap-4 ">
        <div className="w-1/8 border-r">
          <ul className="">
            <li className="border-b p-3 hover:bg-white hover:text-gray-900 bg-gray-100 text-gray-900">
              Info
            </li>
            <li className="border-b p-3 hover:bg-white hover:text-gray-900">
              Courses
            </li>
            <li className="border-b p-3 hover:bg-white hover:text-gray-900">
              Teams
            </li>
            <li className="border-b p-3 hover:bg-white hover:text-gray-900">
              Division
            </li>
          </ul>
        </div>
        <div className="col-span-7 w-full  ">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
