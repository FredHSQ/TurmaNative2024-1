import { View, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return <View style={styles.container}>
    <View style={styles.smallContainer}>

    </View>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingTop: 60,
    paddingHorizontal: 30
  },
  smallContainer: {
    width: 20,
    height: 20,
    backgroundColor: 'blue'
  }
});