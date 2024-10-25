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
    color: "#FFDA10",
    backgroundColor: "#1B8F17",
  },
  {
    title: "notes",
    path: "/notes",
    color: "#BAF9FF",
    backgroundColor: "#FF1616",
  },
  {
    title: "works",
    path: "/works",
    color: "#FF95E9",
    backgroundColor: "#BAFFC5",
  },
  {
    title: "projects",
    path: "/projects",
    color: "#776BFF",
    backgroundColor: "#FFF4BA",
  },
  {
    title: "activism",
    path: "/activism",
    color: "#FF1616",
    backgroundColor: "#FFAD64",
  },
  {
    title: "contact",
    path: "/contact",
    color: "#FFEBBA",
    backgroundColor: "#A378F3",
  },
];
