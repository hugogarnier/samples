import { StyleSheet } from 'react-native';
import Animated, { useAnimatedProps } from 'react-native-reanimated';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

import { colors } from '../../constants';

type CircularProgressProps = {
  theta: Animated.SharedValue<number>;
  r: any;
  strokeWidth: any;
};

const { PI } = Math;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const CircularProgress = ({ r, strokeWidth, theta }: CircularProgressProps) => {
  const radius = r - strokeWidth / 2;
  const circumference = radius * 2 * PI;
  const props = useAnimatedProps(() => {
    return {
      strokeDashoffset: theta.value * radius,
    };
  });

  return (
    <Svg style={StyleSheet.absoluteFill}>
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor={colors.green} stopOpacity="1" />
          <Stop offset="1" stopColor={colors.orange} stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Circle cx={r} cy={r} fill="transparent" stroke="white" r={radius} {...{ strokeWidth }} />
      <AnimatedCircle
        animatedProps={props}
        cx={r}
        cy={r}
        fill="transparent"
        r={radius}
        stroke="url(#grad)"
        strokeDasharray={`${circumference}, ${circumference}`}
        {...{ strokeWidth }}
      />
    </Svg>
  );
};
