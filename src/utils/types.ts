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

interface ArtItem {
  name: string;
  status: ArtStatus;
  link?: string | null;
  start_date?: string | null;
  end_date?: string | null;
}

export type Arts = Array<Partial<Record<ArtCategory, Array<ArtItem>>>>;
