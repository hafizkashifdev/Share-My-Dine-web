import { ReactComponent as Clock } from "../../../assets/svg/footer/clock-icon.svg";
import { ReactComponent as Location } from "../../../assets/svg/footer/location-icon.svg";
import { ReactComponent as Phone } from "../../../assets/svg/footer/phone-icon.svg";
import { ReactComponent as SMS } from "../../../assets/svg/footer/sms-icon.svg";
import { ReactComponent as Twitter } from "../../../assets/svg/footer/twitter-icon.svg";
import { ReactComponent as Tiktok } from "../../../assets/svg/footer/tiktok-icon.svg";
import { ReactComponent as Insta } from "../../../assets/svg/footer/insta-icon.svg";
import { ReactComponent as Facebook } from "../../../assets/svg/footer/facebook-icon.svg";
import { ReactComponent as Youtube } from "../../../assets/svg/footer/youtube-icon.svg";
import { ReactComponent as Linkdin } from "../../../assets/svg/footer/linkdin-icon.svg";
import { pageRoutes } from "../../../routeList";

export const addressData = [
  {
    id: 0,
    icon: Location,
    text: "Suite 6, Offices I-K, The square, Stockley park, Uxbridge, UB11 1FW ",
  },
  {
    id: 10,
    icon: Phone,
    text: "(+44) - 749741 - 5540",
  },
  {
    id: 20,
    icon: SMS,
    text: "info@sharemydine.co.uk",
  },
  {
    id: 30,
    icon: Clock,
    text: "Monday - Friday: 09:00 AM - 05:00 PM",
  },
];

export const bookADineData = [
  {
    id: 0,
    text: "Explore Chefs",
    link: pageRoutes.exploreOurChef,
  },
  {
    id: 10,
    text: "Explore Recipes",
    link: pageRoutes.ExploreRecipesPage,
  },
];
export const workWithUsData = [
  {
    id: 0,
    text: "Careers",
    link: pageRoutes.careers,
  },
  {
    id: 10,
    text: "Work at Share My Dine",
    link: pageRoutes.WorkWithUs,
  },
  {
    id: 110,
    text: "Our Squad",
    link: pageRoutes.ourSquad,
  },
];

export const helpCenterData = [
  {
    id: 0,
    text: "Gift Cards",
    link: pageRoutes.GiftCardPage,
  },
  {
    id: 10,
    text: "FAQ",
    link: pageRoutes.Faqs,
  },
  {
    id: 110,
    text: "Chronicles",
    link: pageRoutes.blog,
  },
  {
    id: 30,
    text: "Our Collection",
    link: pageRoutes.ourCollection,
  },
];
export const socialIcons = [
  {
    id: 0,
    icon: <Twitter />,
    href: "https://twitter.com/sharemydine",
  },
  {
    id: 1120,
    icon: <Linkdin />,
    href: "https://www.linkedin.com/company/sharemy-dine",
  },

  {
    id: 110,
    icon: <Insta />,
    href: "https://www.instagram.com/sharemy_dine/",
  },
  {
    id: 12110,
    icon: <Facebook />,
    href: "https://www.facebook.com/sharemydine",
  },

  {
    id: 10,
    icon: <Tiktok />,
    href: "https://www.tiktok.com/@infosmd01?_t=8fGectbl4N7&_r=1",
  },
  {
    id: 122110,
    icon: <Youtube />,
    href: "https://www.youtube.com/channel/UCr69IsWQMhYhUlSwEeRtjAw",
  },
];
