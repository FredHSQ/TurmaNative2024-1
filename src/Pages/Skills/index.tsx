import { useState } from 'react';
import { Text, View , TextInput, FlatList } from 'react-native';
import { Button } from '../../components/Button';
import { SkillCard } from '../../components/SkillCard';
import { styles } from './styles';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs/';
import { RootTabParamList } from '../../Routes/BottomTabRoutes';

export type ProfileScreenNavigationProp = BottomTabNavigationProp<
  RootTabParamList,
  'Skill'
>;

export interface SkillProps {
  name: string,
  id: string
}

export const Skill = () => {
  const [skillsList, setSkillsList] = useState<SkillProps[]>([]);
  const [newSkill, setNewSkill] = useState<string>('');

  function addSkill() {
    const newSkillObject: SkillProps = {
      name: newSkill,
      id: String(new Date().getTime())
    };

    setSkillsList(prevList => [...prevList, newSkillObject]);
  }

  function removeSkill(id: string) {
    setSkillsList(prevList => prevList.filter(listItem => listItem.id !== id))
  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>
        Skills
      </Text>
      <TextInput
        style={styles.input}
        placeholder={'Escreva sua habilidade'}
        placeholderTextColor={'#888'}
        onChangeText={setNewSkill}
      />
      <Button
        title="Adiciona Habilidades"
        onPress={addSkill}
        activeOpacity={0.7}
      />
      <FlatList
        data={skillsList}
        renderItem={({ item }) => {
          return <SkillCard
            item={item}
            removeSkill={removeSkill}
          />
        }}
        keyExtractor={(item, index) => item.id + index}
      />
    </View>
  );
};
