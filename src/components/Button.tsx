import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

type ButtonProps = {
  label: string;
  variant: string;
  onPress: () => void;
};

export const Button = ({ label, variant, onPress }: ButtonProps) => {
  return (
    <RectButton {...{ onPress }}>
      <SafeAreaView
        className={
          (variant === 'primary' && `bg-primary dark:bg-blue-900`) || `bg-secondary dark:bg-red-900`
        }
        accessible
      >
        <View className="justify-center items-center p-0">
          <Text className="text-2xl dark:text-black text-white">{label}</Text>
        </View>
      </SafeAreaView>
    </RectButton>
  );
};
