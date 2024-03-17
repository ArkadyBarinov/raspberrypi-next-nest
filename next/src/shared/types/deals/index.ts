export interface IDeals {
    deals: Array<IDeal>;
}

export interface IDeal {
    name: string;
    id: number;
    checked: boolean;
}
