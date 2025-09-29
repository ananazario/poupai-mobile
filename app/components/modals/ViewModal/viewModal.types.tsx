export type ViewModalProps = {
    type: 'receitas' | 'despesas' | 'transferencias';
    originBank?: string;
    destinyBank?: string;
    category?: string;
    date?: string;
    amount: string;
};