export interface TitleProps {
  title: string;
}

type ConsumeCategory =
  | "books"
  | "movies"
  | "music"
  | "podcasts"
  | "shows"
  | "video games";

interface ConsumeItem {
  name: string;
  is_recent: boolean;
  link?: string | null;
  start_date?: string | null;
  end_date?: string | null;
}

export type Consumes = Array<
  Partial<Record<ConsumeCategory, Array<ConsumeItem>>>
>;
