import { StatusBar, StyleSheet, Text, View } from 'react-native';

export default TopBar = () => {
  return (
    <View style={styles.TopbarContainer}>
      <StatusBar barStyle="light-content" backgroundColor="teal" />
      <Text style={styles.TopbarText}>Wallpaper Randomizer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  TopbarContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'teal',
    borderBottomEndRadius: 16,
  },
  TopbarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
