import { View } from 'react-native';

import Loading from '../components/Loading';

import useWallpaper from '../hooks/useWallpaper';
import WallpaperList from '../components/WallpaperList';

export default WallpaperListScreen = ({ navigation }) => {
  const { subreddit, wallpapers, loading } = useWallpaper();

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <Loading />
      ) : (
        <WallpaperList
          subreddit={subreddit}
          wallpapers={wallpapers}
          navigation={navigation}
        />
      )}
    </View>
  );
};
