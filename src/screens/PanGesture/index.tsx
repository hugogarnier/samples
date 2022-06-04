import React, { useState } from "react";
import type { LayoutRectangle } from "react-native";
import { View } from "react-native";

import { PanGestureScreen as Gesture } from "./PanGestureScreen";

export const PanGesture = () => {
  const [container, setContainer] = useState<null | LayoutRectangle>(null);
  return (
    <View
      className='flex-auto'
      onLayout={({ nativeEvent: { layout } }) => setContainer(layout)}
    >
      {container && <Gesture {...container} />}
    </View>
  );
};
