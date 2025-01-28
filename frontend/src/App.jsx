import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/homepage/Homepage";
import Listpage from "./routes/ListPage/Listpage";
import Layout from "./routes/Layout/Layout";
import SinglePage from "./routes/SinglePage/SinglePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/list",
          element: <Listpage />,
        },
        {
          path: "/:id",
          element: <SinglePage />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
