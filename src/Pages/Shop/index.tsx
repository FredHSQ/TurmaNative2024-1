import { useEffect, useState } from 'react';
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { MagicItem } from "../../components/MagicItem";
import { MagicItemProps, getMagicItemList } from '../../services/dndApi';

export const Shop = () => {
    const [magicItemList, setMagicItemList] = useState<MagicItemProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    async function fillMagicItemList() {
        try {
            const apiResults = await getMagicItemList();
            setMagicItemList(apiResults.data.results);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fillMagicItemList();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Shop
            </Text>
            {loading ?
                <Text style={{ color: '#fff' }}>
                    Carregando...
                </Text>
                :
                <FlatList
                    data={magicItemList}
                    renderItem={({ item }) => {
                        return <MagicItem
                            item={item}
                        />
                    }}
                />
            }
        </View>
    );
};