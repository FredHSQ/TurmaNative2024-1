import { View, Text, FlatList } from "react-native";
import { styles } from './styles';
import { MagicItem } from "../../components/MagicItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Cart = () => {
    const { cartMagicItemList } = useContext(CartContext);

    return <View style={styles.container}>
        <Text style={styles.title}>
            Carrinho
        </Text>
        <FlatList
            data={cartMagicItemList}
            renderItem={({ item })=> {
                return <MagicItem
                    item={item}
                />
            }}
        />
    </View>
}