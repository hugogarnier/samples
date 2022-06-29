import { StyleSheet } from 'react-native';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle } from 'react-native-reanimated';

import { colors } from '../../constants';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { canvas2Polar, clamp, polar2Canvas } from 'react-native-redash';

type CursorProps = {
  r: number;
  strokeWidth: number;
  theta: Animated.SharedValue<number>;
};

export const Cursor = ({ r, strokeWidth, theta }: CursorProps) => {
  const center = { x: r, y: r };
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.offset = polar2Canvas({ theta: theta.value, radius: r }, center);
    },
    onActive: (event, ctx) => {
      const { translationX, translationY } = event;
      const x = ctx.offset.x + translationX;
      const y1 = ctx.offset.y + translationY;
      const y =
        (x < r && y1) || (theta.value < Math.PI && clamp(y1, 0, r - 0.001)) || clamp(y1, r, 2 * r);
      const value = canvas2Polar({ x, y }, center).theta;
      theta.value = (value > 0 && value) || 2 * Math.PI + value;
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    const { x: translateX, y: translateY } = polar2Canvas(
      { theta: theta.value, radius: r },
      center,
    );
    return {
      transform: [{ translateX }, { translateY }],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View
        style={[
          {
            ...StyleSheet.absoluteFillObject,
            width: strokeWidth,
            height: strokeWidth,
            borderRadius: strokeWidth / 2,
            borderColor: 'white',
            borderWidth: 5,
            backgroundColor: colors.black,
          },
          animatedStyle,
        ]}
      />
    </PanGestureHandler>
  );
};
