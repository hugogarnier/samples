import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/HomeScreen";
import { PanGesture } from "../screens/PanGesture";

export type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
  Participant: undefined;
  Animation: undefined;
  PanGesture: undefined;
};

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='PanGesture' component={PanGesture} />
    </Stack.Navigator>
  );
};
