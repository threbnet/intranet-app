import { Component, useEffect, useState } from "react";
import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
// import "./App.css";
import "./index.css";
import { DashboardPage, DojoPage, LeaderboardPage, LoginPage, ProfilePage, QuestDetailPage, QuestsPage } from "./pages";
import AppLayout from "./layouts/AppLayout";
import ProfileLayout from "./pages/profile/layouts/ProfileLayout";
import InfoForm from "./pages/profile/components/InfoForm";
import MyCourses from "./pages/profile/components/MyCourses";
import MyTeams from "./pages/profile/components/MyTeams";
import Overview from "./pages/quests/components/Overview";
import Timeline from "./pages/quests/components/Timeline";
import Instructions from "./pages/quests/components/Instructions";
import Rewards from "./pages/quests/components/Rewards";
import Submissions from "./pages/quests/components/Submissions";
import Participants from "./pages/quests/components/Participants";
import Handlers from "./pages/quests/components/Handlers";
import Resources from "./pages/quests/components/Resources";


function App() {

  const router = createHashRouter([
    { path: "/", element:<LoginPage />},
    {
      path:"/dashboard",
      element: <AppLayout />,
      children: [
        {index:true, element: <DashboardPage />}
      ]
    },
    {
      path:"/profile",
      element: <AppLayout />,
      children:[
        {
          path:"",
          element:<ProfileLayout />,
          children:[
            {index:true, path:'info', Component: InfoForm},
            {path:'courses', Component: MyCourses},
            {path:'teams', Component: MyTeams},
          
          ]
          },
        {
          path:"courses",
          element:<ProfileLayout />,
          children:[]
        }
      ]
    },
    {
      path:"/quests",
      element: <AppLayout />,
      children: [
        { index:true, element:<QuestsPage />},
        { path:":id", element:<QuestDetailPage />, children:[
          {index:true, path:'overview', Component: Overview},
          {path:'timeline', Component: Timeline},
          {path:'instructions', Component: Instructions},
          {path:'rewards', Component: Rewards},
          {path:'Submissions', Component: Submissions},
          {path:'participants', Component: Participants},
          {path:'handlers', Component: Handlers},
          {path:'resources', Component: Resources},
        ]}
      ]
    },
    {
      path:"/dojo",
      element: <AppLayout />,
      children: [
        {index:true, element: <DojoPage />},
      ]
    },
    {
      path:"/leaderboard",
      element: <AppLayout />,
      children: [
        {index:true, element: <LeaderboardPage />},
      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />

    </>
  )
  // const router = createHashRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<LoginPage />} />

  //       <Route
  //         path="/dashboard/"
  //         element={
  //           <AppLayout>
  //             {" "}
  //             <DashboardPage />{" "}
  //           </AppLayout>
  //         }
  //       />

  //       <Route
  //         path="/dojo/"
  //         element={
  //           <AppLayout>
  //             {" "}
  //             <DojoPage />{" "}
  //           </AppLayout>
  //         }
  //       />

  //       <Route
  //         path="/profile/"
  //         element={
  //           <AppLayout>
  //                   <ProfilePage />
  //           </AppLayout>
  //         },
  //         children:{},
  //       />


  //     </Route>
  //   )
  // );

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleNetworkChange = () => {
    setIsOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);

    return () => {
      window.removeEventListener("online", handleNetworkChange);
      window.removeEventListener("offline", handleNetworkChange);
    };
  }, []);

  return (
    <>
      {isOnline ? (
        <></>
      ) : (
        <div className="bg-red-700 fixed z-50 text-white text-sm text-center p-2 w-full">
          {" "}
          You are currently offline !!! Check your internet....
        </div>
      )}

      <RouterProvider router={router} />
      <div className="z-50">{/* <Loader /> */}</div>
    </>
  );
}

export default App;
