import { createContext, useEffect, useState } from "react";
import { MagicItemProps } from "../../services/dndApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartContext = createContext<CartContextProviderProps>({
    cartMagicItemList: [],
    addCartMagicItem: () => { }
});

interface ContextProps {
    children: React.ReactNode
}

export interface CartContextProviderProps {
    cartMagicItemList: MagicItemProps[],
    addCartMagicItem: (item: MagicItemProps) => void;
}

export const CartProvider = ({ children }: ContextProps) => {
    const [cartMagicItemList, setCartMagicItemList] = useState<MagicItemProps[]>([]);

    useEffect(()=>{
        getData().then(res=>{
            setCartMagicItemList(res ? res : []);
        })
    }, []);

    function addCartMagicItem(item: MagicItemProps) {
        setCartMagicItemList([...cartMagicItemList, item]);
        storeData([...cartMagicItemList, item]);
    }

    const storeData = async (value: MagicItemProps[]) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('cart-item-list', jsonValue);
        } catch (e) {
            // saving error
        }
    };

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('cart-item-list');
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    };

    return <CartContext.Provider
        value={{
            cartMagicItemList,
            addCartMagicItem
        }}
    >
        {children}
    </CartContext.Provider>
}