export const TITLES = {
  home: "home",
  about: "about",
  notes: "notes",
  works: "works",
  projects: "projects",
  activism: "activism",
  contact: "contact",
  404: "404",
} as const;

type TitleKeys = keyof typeof TITLES;
type TitleValues = (typeof TITLES)[TitleKeys];

interface NavigationItem {
  title: TitleValues;
  path: string;
  color: string;
  backgroundColor: string;
}

export const NAVIGATION: NavigationItem[] = [
  {
    title: "home",
    path: "/",
    color: "#FFBABA",
    backgroundColor: "#BAFFDF",
  },
  {
    title: "about",
    path: "/about",
    color: "#BABDFF",
    backgroundColor: "#FFDFBA",
  },
  {
    title: "notes",
    path: "/notes",
    color: "#BAF9FF",
    backgroundColor: "#FFBABA",
  },
  {
    title: "works",
    path: "/works",
    color: "#FFBABA",
    backgroundColor: "#BAFFC5",
  },
  {
    title: "projects",
    path: "/projects",
    color: "#C6FFBA",
    backgroundColor: "#FFCABA",
  },
  {
    title: "activism",
    path: "/activism",
    color: "#C6FFBA",
    backgroundColor: "#FFCABA",
  },
  {
    title: "contact",
    path: "/contact",
    color: "#FFEBBA",
    backgroundColor: "#D2BAFF",
  },
];
