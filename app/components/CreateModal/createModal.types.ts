export type CreateModalProps = {
      type: "receitas" | "despesas" | "transferencias";
  where?: "button" | "actions";
  visible: boolean; 
  onClose: () => void;
}