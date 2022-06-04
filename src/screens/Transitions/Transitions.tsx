import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { useSpring } from 'react-native-redash';

import { Button, cards } from '../../components';

import { AnimatedCard } from './AnimatedCard';

export const Transitions = () => {
  const [toggled, setToggle] = useState(false);
  const isToggled = useSharedValue(false);

  useEffect(() => {
    isToggled.value = toggled;
  }, [toggled]);

  const transition = useSpring(toggled);

  return (
    <View className="flex-auto justify-end bg-background">
      {cards.slice(0, 3).map((card, index) => (
        <AnimatedCard key={card} {...{ index, card, transition }} />
      ))}
      <Button
        variant="primary"
        label={(toggled && 'Reset') || 'Start'}
        onPress={() => setToggle((prev) => !prev)}
      />
    </View>
  );
};
