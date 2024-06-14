import { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from "react-native";
import { styles } from "./styles";
import Image1 from '../src/assets/images/PngItem.png';

export default function Index() {
  const [skillsList, setSkillsList] = useState(['Skill1', 'Skill2', 'Skill3']);

  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={styles.title}>
          Skills
        </Text>
        <TextInput style={styles.input} placeholder={'Escreva sua habilidade'} placeholderTextColor={'#888'} />
        <FlatList
          data={skillsList}
          renderItem={({item}) => {
            return <View style={styles.buttonSkill}>
              <Image style={styles.image} source={Image1} />
              <Text style={styles.textSkill}>{item}</Text>
            </View>
          }}
          keyExtractor={item => item}
        />
      </TouchableOpacity>
    </View>
  );
};