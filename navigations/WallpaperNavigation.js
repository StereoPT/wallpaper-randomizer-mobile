import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WallpaperList from '../screens/WallpaperList';
import ChoosenWallpaper from '../screens/ChoosenWallpaper';

const Stack = createNativeStackNavigator();

const WallpaperNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="WallpapersTab">
      <Stack.Screen
        name="WallpapersTab"
        component={WallpaperList}
        options={{ title: 'Wallpapers' }}
      />
      <Stack.Screen
        name="ChoosenWallpaperTab"
        component={ChoosenWallpaper}
        options={{ title: 'Choosen Wallpaper' }}
      />
    </Stack.Navigator>
  );
};

export default WallpaperNavigation;
