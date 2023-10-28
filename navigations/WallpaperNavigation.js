import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WallpaperListScreen from '../screens/WallpaperListScreen';
import ChosenWallpaper from '../screens/ChosenWallpaper';

const Stack = createNativeStackNavigator();

const WallpaperNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="WallpapersTab"
      screenOptions={{
        headerStyle: { backgroundColor: 'teal' },
        headerTitleStyle: { color: 'white' },
      }}>
      <Stack.Screen
        name="WallpapersTab"
        component={WallpaperListScreen}
        options={{ title: 'Wallpapers' }}
      />
      <Stack.Screen
        name="ChosenWallpaperTab"
        component={ChosenWallpaper}
        options={{ title: 'Choosen Wallpaper' }}
      />
    </Stack.Navigator>
  );
};

export default WallpaperNavigation;
