import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about/about";
import { Contacts } from "./pages/contact/contact";
import { Products } from "./pages/products/products";
import { NotFound } from "./pages/notfound/notfound";
import { Layout } from "./components/layouts/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <About />,
      },
      {
        path: "/contatos",
        element: <Contacts />,
      },
      {
        path: "/produtos/:id",
        element: <Products />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export { router };
