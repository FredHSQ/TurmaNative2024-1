import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { MagicItemProps } from "../../services/dndApi";

interface MagicItemComponentProps extends TouchableOpacityProps {
    item: MagicItemProps,
    setIsModalVisible?: React.Dispatch<React.SetStateAction<boolean>>,
    setChosenMagicItemIndex?: React.Dispatch<React.SetStateAction<string>>
}

export const MagicItem = ({ item, setIsModalVisible, setChosenMagicItemIndex, ...rest }: MagicItemComponentProps) => {

    function chooseMagicItem () {
        setIsModalVisible(true);
        setChosenMagicItemIndex(item.index)
    }

    return <TouchableOpacity onPress={chooseMagicItem} {...rest} style={styles.buttonMagicItem}>
        <Text style={styles.textMagicItem}>
            {item.name}
        </Text>
    </TouchableOpacity>
}