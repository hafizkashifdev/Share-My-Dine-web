import { pageRoutes } from "../../routeList";

export const APPHEADERDATA = [
  {
    name: "Home",
    onClick: () => {},
    href: pageRoutes.home,
  },

  {
    name: "Our Story",
    menuItems: [
      {
        name: "Our Collection",
        onClick: () => {},
        href: pageRoutes.ourCollection,
      },
      {
        name: "Chronicles",
        onClick: () => {},
        href: pageRoutes.blog,
      },
      {
        name: "Gift Cards",
        onClick: () => {},
        href: pageRoutes.GiftCardPage,
      },
    ],
  },
  {
    name: "Walkthrough",
    menuItems: [
      {
        name: "What we do",
        onClick: () => {},
        href: pageRoutes.WhatWeDo,
      },
      {
        name: "FAQ’s",
        onClick: () => {},
        href: pageRoutes.Faqs,
      },
    ],
  },
  {
    name: "Our Culinary Delights",
    menuItems: [
      {
        name: "Explore Chefs",
        onClick: () => {},
        href: pageRoutes.exploreOurChef,
      },
      {
        name: "Explore Recipes",
        onClick: () => {},
        href: pageRoutes.ExploreRecipesPage,
      },
    ],
  },
  {
    name: "Careers",
    onClick: () => {},
    href: pageRoutes.careers,
  },
  {
    name: "Reach Out",
    menuItems: [
      {
        name: "Talk to us",
        onClick: () => {},
        href: pageRoutes.talkToUs,
      },

      {
        name: "Work with us",
        onClick: () => {},
        href: pageRoutes.WorkWithUs,
      },
      {
        name: "Our Squad",
        onClick: () => {},
        href: pageRoutes.ourSquad,
      },
    ],
  },
];
export const MenuSX = (paperSX) => ({
  ".MuiPaper-root": {
    boxShadow: "0px 8px 40px 0px rgba(0, 0, 0, 0.02)",
    ...paperSX,
  },
  mt: "20px",
});
export const ListPaperSX = {
  sx: {
    py: 0,
    overflowY: "hidden",
    width: "223px",
    ".Mui-disabled": {
      opacity: 1,
    },
    ".MuiMenuItem-root": {
      fontFamily: ` 'Work Sans', sans-serif !important`,
      py: "12px",
      transition: "all .1s linear",
      "&:hover": {
        bgcolor: "#F6F6F6",
        fontWeight: 500,
        paddingLeft: "25px",
      },
    },
  },
};
