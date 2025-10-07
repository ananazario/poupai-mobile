import { useChips } from "@/app/components/Chip/chip.model";
import { ChipType } from "@/app/components/Chip/chip.types";

const initialChips: ChipType[] = [
  { id: "1", label: "Últimos 7 dias", selected: false, range: "7d" },
  { id: "2", label: "Últimos 15 dias", selected: false, range: "15d" },
  { id: "3", label: "Último mês", selected: false, range: "30d" },
  { id: "4", label: "Últimos 3 meses", selected: false, range: "90d" },
  { id: "5", label: "Últimos 6 meses", selected: false, range: "180d" },
  { id: "6", label: "Último ano", selected: false, range: "365d" },
];

export function ExpenseModel() {
    const{ chips, toggleChip} = useChips(initialChips);

    return {
    chips,
    toggleChip,
  };
}