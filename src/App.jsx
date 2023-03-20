import { Box, CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/ticket",
          element: <h2>This is child</h2>,
        },
        {
          path: "/about",
          element: <h2>This is about</h2>,
        },
      ],
    },
  ]);

  return (
    <Box>
      <RouterProvider router={router} />
      <CssBaseline />
    </Box>
  );
}

export default App;
