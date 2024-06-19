import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { MagicItemProps } from "../../services/dndApi";

interface MagicItemComponentProps {
    item: MagicItemProps
}

export const MagicItem = ({ item }: MagicItemComponentProps) => {
    return <TouchableOpacity style={styles.buttonMagicItem}>
        <Text style={styles.textMagicItem}>
            {item.name}
        </Text>
    </TouchableOpacity>
}