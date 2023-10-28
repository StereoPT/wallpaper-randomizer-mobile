import { useEffect } from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import WallpaperInfo from '../components/WallpaperInfo';
import WallpaperManager from '@ajaybhatia/react-native-wallpaper-manager';

export default ChosenWallpaper = () => {
  const route = useRoute();
  const { wallpaper } = route.params;

  useEffect(() => {
    try {
      WallpaperManager.setWallpaper({ uri: wallpaper.url, screen: 'both' });
    } catch (error) {
      console.error('[ERROR] setWallpaper:', error);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <WallpaperInfo wallpaper={wallpaper} />
    </View>
  );
};
