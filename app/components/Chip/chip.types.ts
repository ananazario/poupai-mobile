export type ChipType = {
  id: string;
  label: string;
  selected: boolean;
  range: "7d" | "15d" | "30d" | '90d'| '180d' | '365d';
};
