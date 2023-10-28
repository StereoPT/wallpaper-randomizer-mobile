import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';

const InfoLine = ({ label, text }) => {
  return (
    <Text style={styles.Text}>
      <Text style={styles.BoldText}>{label}: </Text>
      {text}
    </Text>
  );
};

export default WallpaperInfo = ({ wallpaper }) => {
  // Display Empty State
  if (!wallpaper) return;

  return (
    <View style={styles.WallpaperInfoContainer}>
      <InfoLine label="Title" text={wallpaper.title} />
      <InfoLine label="URL" text={wallpaper.url} />
      <InfoLine label="SubReddit" text={wallpaper.subreddit} />
      <View style={styles.WallpaperImageContainer}>
        <Image
          source={wallpaper.url}
          width={350}
          height={600}
          contentFit="contain"
          transition={1000}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  WallpaperInfoContainer: {
    flex: 1,
    padding: 8,
    paddingTop: 24,
    gap: 8,
  },
  WallpaperImageContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 32,
  },
  Text: {
    fontSize: 18,
    color: 'black',
  },
  BoldText: {
    fontWeight: 'bold',
  },
});
