import { PixelRatio, StyleSheet, View } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { canvas2Polar } from 'react-native-redash';

import { Cursor } from './Cursor';
import { CircularProgress } from './CircularProgress';
import { width } from '../../constants';

const size = width - 32;
const STROKE_WIDTH = 40;
const r = PixelRatio.roundToNearestPixel(size / 2);
const defaultTheta = canvas2Polar({ x: 0, y: 0 }, { x: r, y: r }).theta;

export const CircularSlider = () => {
  const theta = useSharedValue(defaultTheta);
  return (
    <View className="flex-1 justify-center items-center">
      <View style={{ width: r * 2, height: r * 2 }}>
        <Animated.View style={StyleSheet.absoluteFill}>
          <CircularProgress strokeWidth={STROKE_WIDTH} {...{ theta, r }} />
        </Animated.View>
        <Cursor strokeWidth={STROKE_WIDTH} r={r - STROKE_WIDTH / 2} {...{ theta }} />
      </View>
    </View>
  );
};
