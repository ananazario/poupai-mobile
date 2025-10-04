 export type Option = {
  label: string;
  value: string;
};

export type DropdownSelectProps = {
  label?: string;
  data: Option[];
  placeholder?: string;
  onSelect: (value: string) => void;
  value: string;
}; 