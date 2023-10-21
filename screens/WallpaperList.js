import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

import Loading from '../components/Loading';
import FloatingButton from '../components/FloatingButton';

import useWallpaper from '../hooks/useWallpaper';
import { choice } from '../utils/random';

export default WallpaperList = ({ navigation }) => {
  const { subreddit, wallpapers, loading } = useWallpaper();

  const handleChooseWallpaper = () => {
    const randomWallpaper = choice(wallpapers);

    navigation.navigate('ChoosenWallpaperTab', { wallpaper: randomWallpaper });
  };

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <Loading />
      ) : (
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
                source={{ uri: item.url }}
                width={400}
                height={400}
                resizeMode="center"
              />
            )}
            keyExtractor={(item) => item.url}
          />
          <FloatingButton text="+" onPress={() => handleChooseWallpaper()} />
        </View>
      )}
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
