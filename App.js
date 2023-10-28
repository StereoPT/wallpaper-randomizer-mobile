import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import WallpaperNavigation from './navigations/WallpaperNavigation';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <WallpaperNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}
