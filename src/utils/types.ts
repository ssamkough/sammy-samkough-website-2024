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

export type ConsumeType = "current" | "must" | "past";

interface ConsumeItem {
  name: string;
  type: ConsumeType;
  link?: string | null;
  start_date?: string | null;
  end_date?: string | null;
}

export type Consumes = Array<
  Partial<Record<ConsumeCategory, Array<ConsumeItem>>>
>;
