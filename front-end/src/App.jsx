import { RouterProvider, createBrowserRouter } from "react-router-dom";

import './App.css'

// Components
import AppLayout from "./utilities/AppLayout";
import HomePage from "./home/Home";
import AllTemplatePage from "./templates/AllTemplatePage";
import TemplatePage from "./templates/TemplatePage";
import CreateTemplatePage from "./templates/create/CreateTemplatePage";
import EditTemplatePage from "./templates/edit/EditTemplatePage";

export const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: < HomePage/> },
      { path: "/templates", element: <AllTemplatePage />},
      { path: "/template/:id", element: <TemplatePage />},
      { path: "/template/create", element: <CreateTemplatePage />},
      { path: "/template/:id/edit", element: <EditTemplatePage />}
    ],
  },
]);


function App() {

  return <RouterProvider router={routes} />;
}

export default App
