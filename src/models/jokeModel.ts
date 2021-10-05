export default interface JokeModel {
  categories: Array<string | null>;
  created_at: Date | null;
  icon_url: string | null;
  id: number | null;
  updated_at: Date | null;
  url: string | null;
  value: string | null;
}
