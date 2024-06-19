import axios, { AxiosResponse } from 'axios';

const apiDnd = axios.create({
    baseURL: 'https://www.dnd5eapi.co/api/',
});

export interface MagicItemProps {
    index: string,
    name: string,
    url: string
};

export interface getMagicItemListProps {
    count: number,
    results: MagicItemProps[]
};

export function getMagicItemList(): Promise<AxiosResponse<getMagicItemListProps, any>> {
    const url = 'magic-items';

    return apiDnd.get(url);
}