import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

import { RootStackParamList } from '../navigation/Navigation';

type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProp>();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      {/* <Box /> */}
      <Text onPress={() => navigation.navigate('PanGesture')}>PanGesture</Text>
      <Text onPress={() => navigation.navigate('Transitions')}>Transitions</Text>
    </View>
  );
};
