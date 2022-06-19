import * as React from 'react';
import { View } from 'react-native';
import type Animated from 'react-native-reanimated';

import { width } from '../../constants';
import { Bubble } from './Bubble';

const wWidth = width * 0.8;

interface ChatBubbleProps {
  progress: Animated.SharedValue<number>;
}

export const ChatBubble = ({ progress }: ChatBubbleProps) => {
  const bubbles = [0, 1, 2];
  const delta = 1 / bubbles.length;
  return (
    <View className="flex-auto justify-center items-center">
      <View
        style={{
          width: wWidth,
          height: wWidth,
          borderTopLeftRadius: wWidth / 2,
          borderTopRightRadius: wWidth / 2,
          borderBottomLeftRadius: wWidth / 2,
        }}
        className="flex-row justify-evenly items-center bg-gray-300"
      >
        {bubbles.map((i) => {
          const start = i * delta;
          const end = start + delta;
          return <Bubble key={i} start={start} end={end} progress={progress} />;
        })}
      </View>
    </View>
  );
};
