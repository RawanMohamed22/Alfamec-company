import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import React from "react";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Services = React.lazy(() => import("../pages/services"));
const Product = React.lazy(() => import("../pages/product"));
const Contact = React.lazy(() => import("../pages/contact"));
const Layout = React.lazy(() => import("../pages/Layout"));

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
      </Route>
    </>
  )
);

export default Router;
