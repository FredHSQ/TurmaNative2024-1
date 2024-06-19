import { View, Modal, Text, ScrollView, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { styles } from './styles';
import CloseIcon from '../../../assets/icons/CloseIcon.png';
import { useEffect, useState } from "react";
import { getMagicItemDetails, getMagicItemDetailsProps } from "../../../services/dndApi";

interface MagicItemDetailsModalProps {
    isModalVisible: boolean,
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    chosenMagicItemIndex: string
}

export const MagicItemDetailsModal = ({ isModalVisible, setIsModalVisible, chosenMagicItemIndex }: MagicItemDetailsModalProps) => {
    const [magicItemDetails, setMagicItemDetails] = useState<getMagicItemDetailsProps>();

    useEffect(() => {
        getMagicItemDetails(chosenMagicItemIndex).then(res => {
            setMagicItemDetails(res.data)
        }).catch(error => {
            console.log(error);
        });
    }, []);

    const precoModal = Math.floor(Math.random() * 10000);

    return <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
            setIsModalVisible(false);
        }}
    >
        <View style={styles.modal}>
            <View style={styles.modalContainer}>
                {!magicItemDetails ?
                    <ActivityIndicator
                        size={"large"}
                        color={'red'}
                    />
                    :
                    <ScrollView>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{magicItemDetails.name}</Text>
                            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                                <Image source={CloseIcon} style={styles.closeIcon} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.firstStatsContainer}>
                            <View style={styles.firstStats}>
                                <Text style={styles.textTitle}>Rarity: </Text>
                                <Text style={styles.textTitle}>{magicItemDetails.rarity.name}</Text>
                            </View>
                            <View style={styles.firstStats}>
                                <Text style={styles.textTitle}>Type: </Text>
                                <Text style={styles.textTitle}>{magicItemDetails.equipment_category.name}</Text>
                            </View>
                            <View style={styles.firstStats}>
                                <Text style={styles.textTitle}>Price: </Text>
                                <Text style={styles.textTitle}>R${precoModal},00</Text>
                            </View>
                        </View>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.textTitle}>
                                Descrição:
                            </Text>
                            <Text style={styles.text}>
                                {magicItemDetails.desc[1]}
                            </Text>
                            {magicItemDetails.desc.length > 2 && magicItemDetails.desc.map((description, index) => {
                                if (index > 1)
                                    return <Text style={styles.text}>
                                        {description}
                                    </Text>
                            })
                            }
                        </View>
                    </ScrollView>
                }
            </View>
        </View>
    </Modal>
}