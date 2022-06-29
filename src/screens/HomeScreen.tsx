import { Text, View } from 'react-native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import { RootStackParamList } from '../navigation/Navigation';

export const menuList = [
  {
    screen: 'PanGesture',
    title: '🤲 PanGesture',
  },
  {
    screen: 'Transitions',
    title: '🦖 Transitions',
  },
  {
    screen: 'Animations',
    title: '🌖 Animations',
  },
  {
    screen: 'CircularSlider',
    title: '⭕️ Circular Slider',
  },
] as const;

export const HomeScreen = () => {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();
  return (
    <ScrollView
      style={{ backgroundColor: '#d5e5ff' }}
      contentContainerStyle={{ paddingBottom: 32 }}
    >
      {menuList.map((thumbnail) => (
        <RectButton key={thumbnail.screen} onPress={() => navigate(thumbnail.screen)}>
          <View className="bg-white p-8 border-solid border-b-2 border-gray-600">
            <Text className="text-lg">{thumbnail.title}</Text>
          </View>
        </RectButton>
      ))}
    </ScrollView>
  );
};
