import { View } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from "react-native-reanimated";
import { clamp, withBouncing } from "react-native-redash";

import { Card, Cards, CARD_HEIGHT, CARD_WIDTH } from "../../components";

interface GestureProps {
  width: number;
  height: number;
}

export const PanGestureScreen = ({ width, height }: GestureProps) => {
  const boundX = width - CARD_WIDTH;
  const boundY = height - CARD_HEIGHT;
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {
      offsetX: number;
      offsetY: number;
    }
  >({
    // onStart: (_, ctx) => {
    //   ctx.offsetX = translateX.value;
    //   ctx.offsetY = translateY.value;
    // },
    onActive: (event, ctx) => {
      // translateX.value = clamp(ctx.offsetX + event.translationX, 0, boundX);
      // translateY.value = clamp(ctx.offsetY + event.translationY, 0, boundY);
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    },
    // onEnd: ({ velocityX, velocityY }) => {
    //   translateX.value = withBouncing(
    //     withDecay({
    //       velocity: velocityX,
    //     }),
    //     0,
    //     boundX
    //   );
    //   translateY.value = withBouncing(
    //     withDecay({
    //       velocity: velocityY,
    //     }),
    //     0,
    //     boundY
    //   );
    // },
  });

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <View className='flex-auto'>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View {...{ style }}>
          <Card card={Cards.Card1} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};