export interface TitleProps {
  title: string;
}

type ArtCategory =
  | "books"
  | "movies"
  | "music"
  | "podcasts"
  | "shows"
  | "video games";

export type ArtStatus = "current" | "must" | "past";

interface Episode {
  name: string;
  link: string;
}

interface ArtItem {
  name: string;
  status: ArtStatus;
  link?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  favorite_episodes?: Episode[];
}

export type Arts = Array<Partial<Record<ArtCategory, Array<ArtItem>>>>;
