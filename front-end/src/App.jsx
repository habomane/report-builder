import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

// Components
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/home/Home";
import AllTemplatePage from "./pages/templates/AllTemplatePage";
import TemplatePage from "./pages/templates/TemplatePage";
import CreateTemplatePage from "./pages/templates/create/CreateTemplatePage";
import EditTemplatePage from "./pages/templates/edit/EditTemplatePage";

export const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/templates", element: <AllTemplatePage /> },
      { path: "/template/:id", element: <TemplatePage /> },
      { path: "/template/create", element: <CreateTemplatePage /> },
      { path: "/template/:id/edit", element: <EditTemplatePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
