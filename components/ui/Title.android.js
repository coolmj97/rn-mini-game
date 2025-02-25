import { StyleSheet, Text } from 'react-native';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    padding: 12,
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    fontFamily: 'open-sans-bold',
    maxWidth: '80%', // 기기크기에 대응, 부모 컨테이너에 대한 퍼센트
    width: 300,
  },
});
