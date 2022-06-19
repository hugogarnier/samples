import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

interface BubbleProps {
  progress: Animated.SharedValue<number>;
  start: number;
  end: number;
}

export const Bubble = ({ progress, start, end }: BubbleProps) => {
  const style = useAnimatedStyle(() => {
    const opacity = interpolate(progress.value, [start, end], [0.5, 1], Extrapolate.CLAMP);
    const scale = interpolate(progress.value, [start, end], [1, 1.5], Extrapolate.CLAMP);
    return {
      opacity,
      transform: [{ scale }],
    };
  });
  return <Animated.View className="w-8 h-8 rounded-xl bg-primary" style={style} />;
};
