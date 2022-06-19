import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Easing, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { withPause } from 'react-native-redash';

import { Button } from '../../components';

import { ChatBubble } from './ChatBubble';

const easing = Easing.inOut(Easing.ease);

export const Animations = () => {
  const [play, setPlay] = useState(true);
  const paused = useSharedValue(!play);
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withPause(
      withRepeat(withTiming(1, { duration: 1000, easing }), -1, true),
      paused,
    );
  }, [paused, progress]);
  return (
    <View className="flex-auto justify-center">
      <ChatBubble progress={progress} />
      <Button
        variant="primary"
        label={play ? 'Pause' : 'Play'}
        onPress={() => {
          setPlay((prev) => !prev);
          paused.value = !paused.value;
        }}
      />
    </View>
  );
};
