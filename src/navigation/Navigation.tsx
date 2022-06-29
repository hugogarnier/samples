import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/HomeScreen';
import { PanGesture } from '../screens/PanGesture';
import { Transitions } from '../screens/Transitions/Transitions';
import { Animations } from '../screens/Bubble';
import { CircularSlider } from '../screens/CircularSlider';

export type RootStackParamList = {
  Home: undefined;
  Animations: undefined;
  PanGesture: undefined;
  Transitions: undefined;
  CircularSlider: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PanGesture" component={PanGesture} />
      <Stack.Screen name="Transitions" component={Transitions} />
      <Stack.Screen name="Animations" component={Animations} />
      <Stack.Screen name="CircularSlider" component={CircularSlider} />
    </Stack.Navigator>
  );
};
