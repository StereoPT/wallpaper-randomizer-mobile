import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default Loading = () => {
  return (
    <View style={styles.LoadingContainer}>
      <ActivityIndicator size="large" color="teal" />
    </View>
  );
};

const styles = StyleSheet.create({
  LoadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
