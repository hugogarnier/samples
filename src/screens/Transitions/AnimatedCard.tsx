import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { mix } from 'react-native-redash';

import type { Cards } from '../../components';
import { Card } from '../../components';
import { width } from '../../constants/dimensions';

const origin = -(width / 2 - 16);

interface AnimatedCardProps {
  transition: Animated.SharedValue<number>;
  index: number;
  card: Cards;
}

export const AnimatedCard = ({ card, transition, index }: AnimatedCardProps) => {
  const style = useAnimatedStyle(() => {
    const rotate = (index - 1) * mix(transition.value, 0, Math.PI / 6);
    return {
      transform: [{ translateX: origin }, { rotate: `${rotate}rad` }, { translateX: -origin }],
    };
  });
  return (
    <Animated.View
      key={card}
      style={style}
      className="absolute top-0 bottom-0 left-0 right-0 items-center justify-center p-8"
    >
      <Card {...{ card }} />
    </Animated.View>
  );
};
