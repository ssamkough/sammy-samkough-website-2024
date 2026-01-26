import type { Consumes } from "./types";

export const TITLES = {
  home: "home",
  about: "about",
  notes: "notes",
  works: "works",
  projects: "projects",
  activism: "activism",
  contact: "contact",
  consumes: "consumes",
  colophon: "colophon",
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
    color: "#2ecf12ff",
    backgroundColor: "#cb7418ff",
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
  {
    title: "consumes",
    path: "/consumes",
    color: "#03e8fc",
    backgroundColor: "#f76fc1",
  },
  {
    title: "colophon",
    path: "/colophon",
    color: "#2d2b24ff",
    backgroundColor: "#a69b81ff",
  },
];

export const CONSUMES: Consumes = [
  {
    books: [
      {
        name: "New American Bible (Revised Edition) (NABRE)",
        link: "https://www.biblegateway.com/versions/New-American-Bible-Revised-Edition-NABRE-Bible/",
        start_date: "September 2 2025",
        end_date: null,
        type: "current",
      },
      {
        name: "Martyr!",
        link: null,
        start_date: null,
        end_date: null,
        type: "past",
      },
    ],
  },
  {
    movies: [
      {
        name: "Cléo from 5 to 7",
        link: "https://www.criterion.com/films/244-cleo-from-5-to-7",
        start_date: "January 17 2026",
        end_date: "January 17 2026",
        type: "current",
      },
      {
        name: "House of Hummingbird",
        link: null,
        start_date: null,
        end_date: null,
        type: "past",
      },
    ],
  },
  {
    music: [
      {
        name: "Sinking Of The Titanic",
        link: "https://gavinbryars.bandcamp.com/album/sinking-of-the-titanic",
        start_date: null,
        end_date: null,
        type: "current",
      },
      {
        name: "Taqbir",
        link: "https://taqbir.bandcamp.com/album/taqbir",
        start_date: null,
        end_date: null,
        type: "past",
      },
    ],
  },
  {
    podcasts: [
      {
        name: "Know Your Enemy",
        link: "https://podcasts.apple.com/us/podcast/know-your-enemy/id1462703434",
        start_date: null,
        end_date: null,
        type: "current",
      },
      {
        name: "The Dig",
        link: "https://thedigradio.com",
        start_date: null,
        end_date: null,
        type: "current",
      },
      {
        name: "Syria Trials",
        link: null,
        start_date: null,
        end_date: null,
        type: "past",
      },
    ],
  },
  {
    shows: [
      {
        name: "Frieren: Beyond Journey's End",
        link: null,
        start_date: null,
        end_date: null,
        type: "current",
      },
      {
        name: "King of the Hill",
        link: null,
        start_date: null,
        end_date: null,
        type: "current",
      },
      {
        name: "The Sopranos",
        link: null,
        start_date: null,
        end_date: null,
        type: "past",
      },
    ],
  },
  {
    "video games": [
      {
        name: "Shovel Knight: Treasure Trove",
        link: "https://www.yachtclubgames.com/games/shovel-knight-treasure-trove/",
        start_date: "July 27 2025",
        end_date: null,
        type: "current",
      },
      {
        name: "Death Stranding",
        link: null,
        start_date: null,
        end_date: null,
        type: "must",
      },
      {
        name: "The Legend of Zelda: Breath of the Wild",
        link: null,
        start_date: null,
        end_date: null,
        type: "past",
      },
    ],
  },
];
