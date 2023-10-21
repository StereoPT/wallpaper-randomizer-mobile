import { Image, StyleSheet, Text, View } from 'react-native';

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
          source={{ uri: wallpaper.url }}
          width={400}
          height={400}
          resizeMode="center"
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
