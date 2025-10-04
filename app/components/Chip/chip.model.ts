import { useState } from "react";
import { ChipType } from "./chip.types";

export function useChips(initialChips: ChipType[]) {
  const [chips, setChips] = useState<ChipType[]>(initialChips);

  const toggleChip = (id: string) => {
    setChips(prev =>
      prev.map(chip => ({
        ...chip,
        selected: chip.id === id 
      }))
    );
  };

  return {
    chips,
    toggleChip
  };
}