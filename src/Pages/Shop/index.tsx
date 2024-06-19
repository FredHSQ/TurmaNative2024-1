import { useEffect, useState } from 'react';
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { MagicItem } from "../../components/MagicItem";
import { MagicItemProps, getMagicItemList } from '../../services/dndApi';
import { MagicItemDetailsModal } from '../../components/Modals/MagicItemDetailsModal';

export const Shop = () => {
    const [magicItemList, setMagicItemList] = useState<MagicItemProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [chosenMagicItemIndex, setChosenMagicItemIndex] = useState<string>('');

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
                            setChosenMagicItemIndex={setChosenMagicItemIndex}
                            setIsModalVisible={setIsModalVisible}
                            item={item}
                        />
                    }}
                />
            }
            {isModalVisible &&
                <MagicItemDetailsModal
                    chosenMagicItemIndex={chosenMagicItemIndex}
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                />
            }
        </View>
    );
};