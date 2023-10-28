import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

import FloatingButton from '../components/FloatingButton';

import { choice } from '../utils/random';

export default WallpaperList = ({ subreddit, wallpapers, navigation }) => {
  const handleChooseWallpaper = () => {
    const randomWallpaper = choice(wallpapers);

    navigation.navigate('ChosenWallpaperTab', { wallpaper: randomWallpaper });
  };

  return (
    <View style={styles.wallpaperListContainer}>
      <Text style={styles.subredditText}>
        <Text style={styles.subredditTextBold}>From: </Text>
        {subreddit}
      </Text>

      <FlatList
        horizontal
        data={wallpapers}
        renderItem={({ item }) => (
          <Image
            source={item.url}
            width={350}
            height={600}
            contentFit="contain"
            transition={1000}
          />
        )}
        keyExtractor={(item) => item.url}
      />
      <FloatingButton onPress={() => handleChooseWallpaper()} />
    </View>
  );
};

const styles = StyleSheet.create({
  wallpaperListContainer: {
    flex: 1,
    gap: 32,
    paddingTop: 16,
  },
  subredditText: {
    fontSize: 24,
    textAlign: 'center',
  },
  subredditTextBold: {
    fontWeight: 'bold',
  },
});
