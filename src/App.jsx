import { useEffect, useState } from "react";
import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
// import "./App.css";
import "./index.css";
import { DashboardPage, DojoPage, LoginPage } from "./pages";
import AppLayout from "./layouts/AppLayout";




function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route>

        <Route
          path="/"
          element={<LoginPage />}

          />

        <Route
          path="/dashboard/"
          element={<AppLayout> <DashboardPage /> </AppLayout>}

          />

<Route
          path="/dojo/"
          element={<AppLayout> <DojoPage /> </AppLayout>}

          />

      </Route>

      
    )
  );

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
        <div className="bg-red-700 fixed z-50 text-white text-sm text-center p-2 w-full"> You are currently offline !!! Check your internet....</div>
      )}

      <RouterProvider router={router} />
      <div className="z-50">
        {/* <Loader /> */}
      </div>

    </>
  );
}

export default App;