import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TailwindProvider } from 'tailwindcss-react-native';

import { Navigation } from './src/navigation/Navigation';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TailwindProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </TailwindProvider>
    </GestureHandlerRootView>
  );
}
