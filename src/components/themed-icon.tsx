import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '../hooks/use-theme-color';

type Props = {
  name: React.ComponentProps<typeof Ionicons>['name'];
  size?: number;
  color?: string;
  dark?:string;
  light?:string;
};

export function ThemedIcon({ name, size = 24, color,dark,light }: Props) {
  const themeColor = useThemeColor({light:light,dark:dark},'icon');

  return (
    <Ionicons
      name={name}
      size={size}
      color={color ?? themeColor}
    />
  );
}
