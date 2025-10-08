// Em /components/Chip/chip.model.ts
import { useState } from "react";
import { ChipType } from "./chip.types";

export function useChips(initialChips: ChipType[]) {
  const [chips, setChips] = useState<ChipType[]>(initialChips);

  const toggleChip = (id: string) => {
    // Esta lógica atualizada inverte o 'selected' APENAS do chip clicado
    setChips(prev =>
      prev.map(chip =>
        chip.id === id ? { ...chip, selected: !chip.selected } : chip
      )
    );
  };

  return {
    chips,
    toggleChip
  };
}