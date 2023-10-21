import { Pressable, Text, StyleSheet } from 'react-native';

export default FloatingButton = ({ text, onPress }) => {
  return (
    <Pressable style={styles.ButtonWrapper} onPress={onPress}>
      <Text style={styles.ButtonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ButtonWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    bottom: 16,
    right: 16,

    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'teal',
  },
  ButtonText: {
    fontSize: 36,
    lineHeight: 42,
    color: 'white',
  },
});
