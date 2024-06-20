import axios, { AxiosResponse } from 'axios';

const apiDnd = axios.create({
    baseURL: 'https://www.dnd5eapi.co/api/',
});

export interface MagicItemProps {
    index: string,
    name: string
};

export interface getMagicItemListProps {
    count: number,
    results: MagicItemProps[]
};

export function getMagicItemList(): Promise<AxiosResponse<getMagicItemListProps, any>> {
    const url = 'magic-items';

    return apiDnd.get(url);
}

export interface getMagicItemDetailsProps {
    index: string;
    name: string;
    equipment_category: EquipmentCategory;
    rarity: Rarity;
    desc: string[];
}

export interface EquipmentCategory {
    index: string;
    name: string;
    url: string;
}

export interface Rarity {
    name: string;
}


export function getMagicItemDetails(index: string): Promise<AxiosResponse<getMagicItemDetailsProps, any>> {
    const url = `magic-items/${index}`;

    return apiDnd.get(url);
}