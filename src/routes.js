import { createBrowserRouter } from "react-router-dom";
import { pageRoutes } from "./routeList";
import { Layout } from "./layout/layout";
import { HomePage } from "./pages/home-page";
import OurCollection from "./pages/our-collection";
import Careers from "./pages/careers";
import BlogDetailPage from "./pages/BlogDetailPage";
import BlogPage from "./pages/blog-page";
import GiftCardPage from "./pages/GiftCardPage";
import WhatWeDo from "./pages/WhatWeDo";
import Faqs from "./pages/Faqs";
import Signup from "./pages/Signup";
import PrivacyPolicy from "./pages/privacy-policy";
import CookiePolicy from "./pages/cookie-policy";
import TermsConditions from "./pages/terms-conditions";
import ExploreRecipesPage from "./pages/ExploreRecipesPage";
import EatHealthyPage from "./pages/EatHealthyPage";
import Login from "./pages/login";
import ExploreOurChef from "./pages/explore-our-chef";
import SingleChef from "./pages/single-chef";
import OurSquad from "./pages/our-squad";
import TalkToUs from "./pages/talk-to-us";
import WorkWithUs from "./pages/work-with-us";

export const router = createBrowserRouter([
  {
    path: pageRoutes.home,
    element: <Layout />,
    children: [
      {
        path: pageRoutes.home,
        default: true,
        element: <HomePage />,
      },
      {
        path: pageRoutes.ourCollection,
        element: <OurCollection />,
      },
      {
        path: pageRoutes.BlogDetailPage,
        element: <BlogDetailPage />,
      },
      {
        path: pageRoutes.careers,
        element: <Careers />,
      },
      {
        path: pageRoutes.blog,
        element: <BlogPage />,
      },
      {
        path: pageRoutes.GiftCardPage,
        element: <GiftCardPage />,
      },
      {
        path: pageRoutes.WhatWeDo,
        element: <WhatWeDo />,
      },
      {
        path: pageRoutes.Faqs,
        element: <Faqs />,
      },
      {
        path: pageRoutes.privacyPolicy,
        element: <PrivacyPolicy />,
      },
      {
        path: pageRoutes.cookiePolicy,
        element: <CookiePolicy />,
      },
      {
        path: pageRoutes.termsConditions,
        element: <TermsConditions />,
      },
      {
        path: pageRoutes.ExploreRecipesPage,
        element: <ExploreRecipesPage />,
      },
      {
        path: pageRoutes.exploreOurChef,
        element: <ExploreOurChef />,
      },
      {
        path: pageRoutes.EatHealthyPage,
        element: <EatHealthyPage />,
      },
      {
        path: pageRoutes.singleChef,
        element: <SingleChef />,
      },
      {
        path: pageRoutes.ourSquad,
        element: <OurSquad />,
      },
      {
        path: pageRoutes.talkToUs,
        element: <TalkToUs />,
      },
        
      {
        path: pageRoutes.WorkWithUs,
        element: <WorkWithUs/>,
      }
    ],
  },
  { path: pageRoutes.signup, element: <Signup /> },
  { path: pageRoutes.login, element: <Login /> },
]);
