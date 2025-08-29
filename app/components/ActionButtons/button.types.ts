
export type ActionButtonsProps ={
    type: "receitas" | "despesas" | "transferencias" | "extrato";
    title: string;
    onPress?: () => void;
}