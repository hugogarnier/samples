import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/HomeScreen';
import { PanGesture } from '../screens/PanGesture';
import { Transitions } from '../screens/Transitions/Transitions';

export type RootStackParamList = {
  Home: undefined;
  Animation: undefined;
  PanGesture: undefined;
  Transitions: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PanGesture" component={PanGesture} />
      <Stack.Screen name="Transitions" component={Transitions} />
    </Stack.Navigator>
  );
};
