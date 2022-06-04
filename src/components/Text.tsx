import type { ReactNode } from "react";
import { Text as RNText } from "react-native";
import type { TextProps as OriginalTextProps } from "react-native";

export interface TextProps extends OriginalTextProps {
  children: ReactNode;
  className: string;
}

export const Text = ({ children, className }: TextProps) => {
  return <RNText className={className}>{children}</RNText>;
};
