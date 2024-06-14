import { TouchableOpacity, Image, Text } from "react-native";
import { styles } from "./styles";
import Image1 from '../../assets/images/PngItem.png';
import { SkillProps } from "@/app";

interface SkillCardProps {
    item: SkillProps,
    removeSkill: (id: string) => void;
}

export const SkillCard = ({ item, removeSkill } : SkillCardProps) => {
    return <TouchableOpacity onPress={() => removeSkill(item.id)} style={styles.buttonSkill}>
        <Image style={styles.image} source={Image1} />
        <Text style={styles.textSkill}>{item.name}</Text>
    </TouchableOpacity>
}