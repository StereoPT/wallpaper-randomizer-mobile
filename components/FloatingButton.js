import { Pressable, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default FloatingButton = ({ onPress }) => {
  return (
    <Pressable style={styles.ButtonWrapper} onPress={onPress}>
      <Feather name="plus" size={32} color="white" />
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
});
